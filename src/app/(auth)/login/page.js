'use client';
import axiosPublic from '@/app/lib/axiosPublic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter()
   const [errorMessage,setErorrMessage]  = useState('')
  const [formData, setFormData] = useState({
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
    setErorrMessage('');
    try {
      const res = await axiosPublic.post('/auth/login', formData);
      if (res?.data) {
        setFormData({ email: '', password: '' });
        router.push('/')
      }
    } catch (error) {
      setErorrMessage('Invalid Email or Password');
      console.error('login Failed', error?.message || error);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit}>
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
        <input type="submit" className="border py-1.5 px-5" value="login" />
      </form>
    </section>
  );
}
