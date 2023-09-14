

//import {Web3} from "web3"
import { ethers } from "ethers"
//import POKETOKEN_DATA from "../contracts-build/PokeToken.json"


export async function trainPokemon(id,account,contractAddress,abi){
    if(!window.ethereum) throw new Error("Install Metamask to run this app!")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    try {
        const transaction = await contract.train(id);
        
        const receipt = await transaction.wait(2)
        return receipt
    } catch (error) {
        console.error(error);
        throw new Error("Could not train a Pokemon");
    }

}