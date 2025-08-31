import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Header() {
  return (
    <>
      <header>
        <div className="relative px-3 max-w-[1420px] mx-auto">
          <div className="flex items-center absolute top-[30px] py-2 z-[9999999] bg-white w-fit rounded-r-2xl">
            {/* top radius box */}
            <div className="left-box absolute w-[20px] h-[20px] bg-white top-[-20px] left-[0px]"></div>
            <div className="left-box absolute w-[20px] h-[20px] bg-[#eae0f9] rounded-bl-[20px] top-[-20px] left-[0px]"></div>
            {/* bottom radius box */}
            <div className="left-box absolute w-[20px] h-[20px] bg-white bottom-[-20px] left-[0px]"></div>
            <div className="left-box absolute w-[20px] h-[20px] bg-[#e8dcfa] rounded-tl-[20px] bottom-[-20px] left-[0px]"></div>
            <nav className="flex justify-between gap-5 items-center px-5">
              <div className="logo flex w-fit justify-center items-end">
                <Image className="w-[90px] py-1 md:py-2 md:w-[100px]" src="/assets/images/logo.png" alt="logo" width={100} height={100} />
              </div>
              <div className="menu-items md:flex gap-5 hidden lg:text-lg">
                <ul className="flex gap-5 items-end">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/signup">Singup</Link>
                  </li>
                </ul>
                <div className="cart">🤍</div>
              </div>
            </nav>
          </div>
          <div className="nav-bar md:hidden rounded-md z-[9999999] absolute w-[40px] h-[40px] bg-white right-[30px] top-[50px] flex items-center justify-center">
            <HiOutlineMenuAlt4 className="" size={30} />
          </div>
        </div>
      </header>
    </>
  );
}
