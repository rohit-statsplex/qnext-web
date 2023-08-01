import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow">
        <div className="relative flex items-center justify-between h-28">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.svg"
              alt="QNEXT.AI"
              width={100}
              height={100}
              className="md:hidden"
            />
            <Image
              src="/logo.svg"
              alt="QNEXT.AI"
              width={150}
              height={150}
              className="md:block hidden"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              {/* More navigation items here */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* More navigation items here */}
        </div>
      </div>
    </nav>
  );
};

// export default Navbar;
