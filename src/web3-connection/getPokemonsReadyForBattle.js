 import { ethers } from "ethers";
export async function getPokemonsReadyForBattle(account,contractAddress,abi){
    if(!window.ethereum) throw new Error("Install Metamask to run this app!")
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    try {
        const pokemonsReadyForBattle = await contract.getPokemonReadyForBattle()
        console.log(pokemonsReadyForBattle)
        return pokemonsReadyForBattle;

    } catch (error) {
        console.error(error);
        throw new Error("Could not Fetch Pokemons Ready for battle");
    }

}