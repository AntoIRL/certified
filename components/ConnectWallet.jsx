import { NetworkType } from "@airgap/beacon-sdk";

export default function ConnectButton ({
  Tezos,
  setUserAddress,
  wallet,
}) {
  const connectWallet = async () => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: "https://api.ghost.tzstats.com",
        },
      });
      // gets user's address
      const userAddress = await wallet.getPKH()
	 localStorage.setItem("walletAddress", userAddress);
      setUserAddress(userAddress)
      Tezos.setWalletProvider(wallet)
    } catch (error) {
      console.log(error)
    }
  };

  return (
      <button className="bg-[#1E50FF] outline-none border-none py-3 px-5 rounded-xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 w-auto focus:scale-90 w-1/2 text-xl" onClick={connectWallet}>
        <span>Connect your wallet</span>
      </button>
  )
}
