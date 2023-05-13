import Link from "next/link";
import Image from 'next/image'
import React, { useEffect, useState } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const [addr, setAddr] = useState("");

  const changeNavbar = () => {
    if (window.scrollY >= 20) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeNavbar);
  });

  useEffect(() => {
    const addr = localStorage.getItem("walletAddress");
    setAddr(addr);
    console.log(addr)
  }, []);

  return (
    <>
      <section className="sticky top-0 z-[100] w-full px-2 py-2 sm:px-4 transition duration-250 ease-in-out left-[-100%]">
        <nav
          className={
            hasScrolled
              ? `rounded-lg px-6 font-body flex items-center justify-between max-w-[1240px] my-2 mx-auto h-16 md:px-4 md:mx-5 backdrop-blur-sm bg-[#000000]/40 sm:px-1 ssm:p-1 transition duration-250 ease-in-out border border-solid border-sky-600`
              : `rounded-lg px-6 font-body flex items-center justify-between max-w-[1440px] my-2 mx-auto h-16 md:px-4 md:mx-5 sm:px-1 ssm:p-1 transition duration-250 ease-in-out`
          }
        >
          <h2 className="ssm:text-[10px]">
            <Link href="/">
              <Image src="/logo.png" width='117px' height='42px' />
            </Link>
          </h2>
          <ul className="flex gap-3 items-center justify-center transition-all list-none sm:hidden">
          </ul>
          <p className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 sm:hidden">
	  		{addr}
          </p>
        </nav>
      </section>
    </>
  );
};

export default Header;
