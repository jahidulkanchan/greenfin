import { NextResponse } from 'next/server';
import User from '@/models/User'; // ইউজার মডেল ইম্পোর্ট করলাম
import bcrypt from 'bcryptjs';
import { connectDB } from '@/config/db'; // তোমার ডাটাবেস কানেকশন

export async function POST(request) {
  try {
    // ডাটাবেসে কানেক্ট করছি
    await connectDB();

    // রিকোয়েস্ট থেকে JSON ডাটা নিচ্ছি
    const { name, email, password, provider, providerId } = await request.json();

    // বাধ্যতামূলক ফিল্ড চেক করছি
    if (!name || !email || (!password && !provider)) {
      return NextResponse.json({ message: 'Name, Email and Password or Provider info required' }, { status: 400 });
    }

    // একই ইমেইল দিয়ে আগে থেকে ইউজার আছে কিনা দেখছি
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists with this email' }, { status: 400 });
    }

    // যদি পাসওয়ার্ড দেওয়া হয়, তাহলে হ্যাশ করব
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // নতুন ইউজার অবজেক্ট তৈরি করছি
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'customer', // ডিফল্ট রোল
      profileImage: '',
      resetPassword: null,
      provider: provider || null,
      providerId: providerId || null,
    });

    // ইউজার ডাটাবেসে সেভ করছি
    await newUser.save();

    // সফল মেসেজসহ রেসপন্স পাঠাচ্ছি
    return NextResponse.json(
      {
        message: 'User created successfully',
        user: { id: newUser._id, name: newUser.name, email: newUser.email },
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
