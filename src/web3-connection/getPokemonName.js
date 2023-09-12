

//import {Web3} from "web3"

import { ethers } from "ethers"

//import POKETOKEN_DATA from "../contracts-build/PokeToken.json"


export async function totalSupply(account,contractAddress,abi){
    if(!window.ethereum) throw new Error("Install Metamask to run this app!")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    try {
        const totalSupply = await contract.totalSupply();
        
        return Number(totalSupply)
        
    } catch (error) {
        console.error(error);
        throw new Error("Could not track the total Supply for Pokemon");
    }

}
export async function getPokemonName(totalSupplyFunction,account,contractAddress,abi){
    try {
        const totalSupply = await totalSupplyFunction(account,contractAddress,abi)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${totalSupply+1}/`)
        const jsonRes = await response.json()
        return jsonRes
    } catch (error) {
        throw new Error("Could not get total supply for tracking the name")
    }
}