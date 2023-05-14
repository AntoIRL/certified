import { TezosToolkit } from '@taquito/taquito';

export default async function Mint(wallet) {
  	const Tezos = new TezosToolkit('https://ghostnet.tezos.marigold.dev')
	const contract = await Tezos.wallet.at('KT1Rx5yNcAPhSCnQSmtQdmyF9CEvUfCSaSrx')
	const operation = await contract.methods.mint_tokens([
  {
    owner: wallet.address,
    token_id: 1,
    amount: 1
  },
  {
    owner: wallet.address,
    token_id: 2,
    amount: 1
  }
]).send();
	await operation.confirmation()
	console.log(wallet)
}
