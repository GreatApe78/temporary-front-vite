import { ethers } from "ethers";


export async function battle(idA, idB, account, contractAddress, contractAbi) {
	if (!window.ethereum) throw new Error("Install Metamask to run this app!");
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = await provider.getSigner(account);
	const contract = new ethers.Contract(contractAddress, contractAbi, signer);
	try {
		const transaction = await contract.battle(
			idA,idB
			
		);
		console.log(transaction);
		return transaction;
	} catch (error) {
		console.error(error);
		throw new Error("Could not Battle with this Pokemon");
	}
}
