//import {Web3} from "web3"
import { ethers } from "ethers"
//import POKETOKEN_DATA from "../contracts-build/PokeToken.json"


export async function mintPokemon(account,contractAddress,abi){
    if(!window.ethereum) throw new Error("Install Metamask to run this app!")
    let temporaryTokenUri = "ipfs://any/{id}.json"
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    try {
        const transaction = await contract.mint("Pikachu",account, temporaryTokenUri);
        console.log(transaction);
        return "Token minted successfully";
    } catch (error) {
        console.error(error);
        throw new Error("Could not mint a Pokemon");
    }

}