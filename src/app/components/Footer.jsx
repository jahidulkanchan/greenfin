import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-6 px-4 text-center font-sans text-sm">
      <p>&copy; {new Date().getFullYear()} Greenfin. All rights reserved.</p>
      <p className="mt-1">
        Crafted with <span className="text-green-300">💚</span> for sustainable growth and innovation.
      </p>
    </footer>
  );
}
