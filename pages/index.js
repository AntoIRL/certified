import Head from "next/head";
import Image from "next/image";
import mockartist from "../constants/mock-artist.json";
import { useEffect, useState } from "react";
import { Header } from "../components";
import { BeaconWallet } from '@taquito/beacon-wallet'
import { TezosToolkit } from '@taquito/taquito'
import { NetworkType } from '@airgap/beacon-types'
import Mint from '../lib/mint'

export default function Home() {
  const [Tezos, _] = useState(new TezosToolkit('https://api.ghost.tzstats.com')) 
  const [wallet, __] = useState(new BeaconWallet({ name: "Certified", preferredNetwork: NetworkType.GHOSTNET }))

  useEffect(() => {
	  Tezos.setWalletProvider(wallet)
  }, [wallet]);

  return (
    <div className="">
      <Head>
      </Head>
      <Header />

      <div className="">
        {/* HeroSection */}
        <section className="h-screen w-screen grid grid-cols-10  gap-2 font-body overflow-hidden md:gap-12 medium md:px-5 sm:grid-cols-1 sm:h-full relative bg-[url('../public/background.png')] bg-cover bg-no-repeat bg-center">
          <div className="flex flex-col items-center justify-center h-full sm:items-center col-span-6 m-10">
	  	  <h1 className="text-[85px] text-center">The label that sets your wallet apart</h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center col-span-4">
            <div className="bg-black rounded-2xl flex flex-col p-6 sm:h-max w-4/5">
              <Image
                src="/images/Starknet.png"
                alt="mock"
                height={352}
                width={352}
                layout="intrinsic"
              ></Image>
              <div className="text-center text-2xl">
                <h1>Starknet</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="px-20 py-20  gap-2 font-body bg-white bg-cover text-black">
          <h2 className="sm:text-center md:mx-10">Available airdrop :</h2>
          <div className="grid grid-cols-4 gap-3 sm:gap-y-8 md:grid-cols-2 sm:grid-cols-1 sm:p-12 md:mx-10">
            {mockartist.map((data) => (
              <div
                key={data.id}
                className="bg-[#272D37] flex flex-col justify-center items-center m-10 p-3 rounded-xl text-white"
              >
                <div className="w-full relative">
                  <img
                    src={data.bgImage}
                    alt={data.name}
                    layout="responsive"
                    className="w-full rounded-2xl h-[225px]"
                  />
                </div>
                <div className="w-full text-center font-bold">
                  <h3>{data.name}</h3>
			  <button class="bg-[#1E50FF] rounded-full px-4 py-2 border-0 text-lg cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto focus:scale-90" onClick={() => Mint(wallet)}>
				  Validate
			  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
