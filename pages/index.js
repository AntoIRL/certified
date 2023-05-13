import Head from "next/head";
import Image from "next/image";
import data from "../constants/mock-nft.json";
import mockartist from "../constants/mock-artist.json";
import { useEffect, useState } from "react";
import { Footer, Header } from "../components";
import { BeaconWallet } from '@taquito/beacon-wallet'
import { TezosToolkit } from '@taquito/taquito'
import { NetworkType } from '@airgap/beacon-types'
import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  const [Tezos, _] = useState(new TezosToolkit('https://api.ghost.tzstats.com')) 
  const [wallet, __] = useState(new BeaconWallet({ name: "Certified", preferredNetwork: NetworkType.GHOSTNET }))

  useEffect(() => {
	  Tezos.setWalletProvider(wallet)
  }, [wallet]);

  const [userAddress, setUserAddress] = useState("")

  return (
    <div className="bg-[#2f3542]">
      <Head>
      </Head>
      <Header />

      <div className="relative overflow-hidden">
        {/* HeroSection */}
        <section className="max-w-[1240px] my-20 mx-auto grid grid-cols-2  gap-2 font-body h-[540px] overflow-hidden top-7 md:gap-12 medium md:px-5 sm:grid-cols-1 sm:h-full relative ">
          <div className="flex flex-col items-center justify-center h-full sm:items-center">
		  <ConnectWallet Tezos={Tezos} setUserAddress={setUserAddress} wallet={wallet} />
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[400px] h-[536px] bg-[#272D37]/60 rounded-2xl flex flex-col p-6 sm:h-max">
              <Image
                src="/images/mock.png"
                alt="mock"
                height={352}
                width={352}
                layout="intrinsic"
              ></Image>
              <div className="">
                <h1>Hamlet</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1240px] my-20 mx-auto  gap-2 font-body top-7 ">
          <h2 className="sm:text-center md:mx-10">Featured Artist </h2>
          <div className="grid grid-cols-4 gap-3 sm:gap-y-8 md:grid-cols-2 sm:grid-cols-1 sm:p-12 md:mx-10">
            {mockartist.map((data) => (
              <div
                key={data.id}
                className="w-full bg-[#272D37] flex flex-col justify-center items-center p-3 rounded-xl"
              >
                <div className="w-full relative">
                  <img
                    src={data.bgImage}
                    alt={data.name}
                    layout="responsive"
                    className="w-full rounded-2xl h-[225px]"
                  />
                  <img
                    src={data.image}
                    alt={data.name}
                    layout="intrinsic"
                    className="absolute -bottom-[40px] left-0 right-0 mx-auto h-[104px] w-[104px] bg-[#272D37] rounded-full"
                  />
                </div>
                <div className="w-full text-center mt-8 font-bold">
                  <h3>{data.name}</h3>
                  <p>Price: {data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
