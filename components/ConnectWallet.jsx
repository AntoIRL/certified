import { NetworkType } from "@airgap/beacon-sdk";
import { TezosContext } from '../context/walletContext.js';
import { useContext } from "react";

export default function ConnectButton ({ setWallet }) {

  const { wallet, Tezos } = useContext(TezosContext);
  const connectWallet = async () => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: "https://api.ghost.tzstats.com",
        },
      });
      Tezos.setWalletProvider(wallet)
	 setWallet(wallet)
    } catch (error) {
      console.log(error)
    }
  };

  return (
      <button className="bg-[#1E50FF] outline-none border-none py-3 px-5 w-80 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto focus:scale-90 w-1/2 text-xl" onClick={connectWallet}>
        <span>Connect your wallet</span>
      </button>
  )
}
