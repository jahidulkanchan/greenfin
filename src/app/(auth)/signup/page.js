'use client';
import axiosPublic from '@/app/lib/axiosPublic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  const [errorMessage,setErorrMessage]  = useState('')
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
    setErorrMessage('')
    try {
      const res = await axiosPublic.post('/auth/signup', formData);
      console.log('signup successfully');
      if (res?.data) {
        setFormData({ name: '', email: '', password: '' });
        router.push('/login');
      }
    } catch (error) {
      setErorrMessage('Check Your Email & Password');
      console.error('Signup Failed', error?.message || error);
    }
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
        <p className='text-red-500'>{errorMessage}</p>
        <br />
        <input type="submit" className="border py-1.5 px-5" value="submit" />
      </form>
    </section>
  );
}
