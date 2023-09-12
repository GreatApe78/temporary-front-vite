//import {Web3} from "web3"
import { ethers } from "ethers"
import { getPokemonName, totalSupply } from "./getPokemonName";
//import POKETOKEN_DATA from "../contracts-build/PokeToken.json"


export async function mintPokemon(account,contractAddress,abi){
    if(!window.ethereum) throw new Error("Install Metamask to run this app!")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = await provider.getSigner(account);
const contract = new ethers.Contract(contractAddress, abi, signer);

try {
    const pokemonData = await getPokemonName(totalSupply,account,contractAddress,abi)
        let temporaryTokenUri = `ipfs://QmSAouegPjirrhA8f8Q89HCsGPTMHuUKoQHuTDQDUcnFwz/${pokemonData.id}.json`
        const transaction = await contract.mint(pokemonData.name,account, temporaryTokenUri);
        console.log(transaction)
        return transaction
    } catch (error) {
        console.error(error);
        throw new Error("Could not mint a Pokemon");
    }

}