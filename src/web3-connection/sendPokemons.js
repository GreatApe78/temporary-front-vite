//import {Web3} from "web3"
import { ethers } from "ethers"
//import POKETOKEN_DATA from "../contracts-build/PokeToken.json"


export async function sendPokemon(id,account,contractAddress,abi){
    if(!window.ethereum) throw new Error("Install Metamask to run this app!")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    try {
        const transaction = await contract.sendPokemon(id);
        
        const receipt = await transaction.wait(2)
        return receipt.transactionHash;
    } catch (error) {
        console.error(error);
        throw new Error("Could not send a Pokemon");
    }

}