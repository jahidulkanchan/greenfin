import { NextResponse } from 'next/server';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/config/db';

export async function POST(request) {
  try {
    // ডাটাবেস কানেকশন
    await connectDB();

    // রিকোয়েস্ট থেকে ডাটা নিচ্ছি
    const { email, password, provider, providerId } = await request.json();

    // Email চেক
    if (!email || (!password && !provider)) {
      return NextResponse.json({ message: 'Email and Password or Provider info required' }, { status: 400 });
    }

    // ইউজার খুঁজে বের করো
    const user = await User.findOne({ email });

    // ইউজার না থাকলে
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // যদি provider দিয়ে লগইন হয়
    if (provider) {
      if (user.provider !== provider || user.providerId !== providerId) {
        return NextResponse.json({ message: 'Provider mismatch' }, { status: 401 });
      }
      return NextResponse.json(
        {
          message: 'Login successful',
          user: { id: user._id, name: user.name, email: user.email },
        },
        { status: 200 },
      );
    }

    // যদি email + password দিয়ে লগইন হয়
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    // সফল লগইন
    return NextResponse.json(
      {
        message: 'Login successful',
        user: { id: user._id, name: user.name, email: user.email },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
