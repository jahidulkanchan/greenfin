'use client';
import axiosPublic from '@/app/lib/axiosPublic';
import { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPublic.post('/auth/signup', formData);
      console.log('signup successfully');
      if(res?.data){
       setFormData({ name: '', email: '', password: '' });
      }
    } catch (error) {
      console.log('Signup Failed', error?.message || error);
    }
    console.log('Form Data:', formData);
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input className="border outline-none" id="name" type="text" value={formData.name} onChange={handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input className="border outline-none" id="email" type="email" value={formData.email} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input className="border outline-none" id="password" type="password" value={formData.password} onChange={handleChange} />
        <br />
        <br />
        <input type="submit" className="border py-1.5 px-5" value="submit" />
      </form>
    </section>
  );
}
