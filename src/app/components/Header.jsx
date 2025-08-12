import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Header() {
  return (
    <>
      <header className="min-h-[70px] flex items-center z-[9999999] bg-white w-fit m-5  rounded-br-2xl">
        <nav className="flex justify-between gap-5 items-center px-5">
          <div className="logo flex w-fit justify-center items-end">
            <Image className="w-[110px] md:w-[130px]" src="/assets/images/logo.png" alt="logo" width={100} height={100} />
          </div>
          <div className="menu-items flex ">
            <ul className="flex gap-5 items-end">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/auth/signup">Singup</Link>
              </li>
            </ul>
          </div>
          <div className="cart">🤍</div>
        </nav>
      </header>
    </>
  );
}
