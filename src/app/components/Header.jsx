import Image from 'next/image';
import React from 'react'

export default function Header() {
  return (
    <>
      <header className="min-h-[100px] flex items-center">
        <nav className="">
          <div className="logo flex w-fit justify-center items-center">
            <Image className="w-[60px]" src="/assets/images/logo.png" alt="logo" width={100} height={100} />
            <h2 className="text-2xl font-bold mt-2.5 text-green-700">
              Green<span className="text-blue-700">Fin</span>
            </h2>
          </div>
        </nav>
      </header>
    </>
  );
}
