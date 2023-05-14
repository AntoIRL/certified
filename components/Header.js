import Link from "next/link";
import Image from 'next/image'
import React, { useContext, useEffect, useState } from "react";
import ConnectWallet from '../components/ConnectWallet'
import { TezosContext } from "../context/walletContext";

const Header = () => {
  const [addr, setAddr] = useState("");
  const { wallet, setWallet} = useContext(TezosContext)
  const [ walletHeader, setWalletHeader ] = useState("")
  useEffect(() => {
	const getAddress = async () => {
      if (walletHeader !== "") {
        const address = await wallet.getPKH();
        console.log('Adresse du portefeuille:', address);
	   setAddr(address)
      }
    };
    getAddress();
  }, [walletHeader]);

  return (
    <>
      <section className="sticky top-0 z-[100] w-full px-2 py-2 sm:px-4 transition duration-250 ease-in-out left-[-100%] bg-black">
        <nav
          className="rounded-lg px-6 font-body flex items-center justify-between my-2 mx-auto h-16 md:px-4 md:mx-5 sm:px-1 ssm:p-1 transition duration-250 ease-in-out">
          <h2 className="ssm:text-[10px] ml-40">
            <Link href="/">
              <Image src="/logo.png" width='117px' height='42px' />
            </Link>
          </h2>
          <ul className="flex gap-3 items-center justify-center transition-all list-none sm:hidden">
          </ul>
          <p className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 sm:hidden">
	  		{addr == "" ? <ConnectWallet setWallet={setWalletHeader} /> : addr}
          </p>
        </nav>
      </section>
    </>
  );
};

export default Header;
