import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { getPokemons } from '../web3-connection/getPokemons';
import { useAddress } from '@thirdweb-dev/react';
import { useContract } from '../contexts/ContractContext';
import { sendPokemon } from '../web3-connection/sendPokemons';
import { callPokemon } from '../web3-connection/callPokemon';
import { trainPokemon } from '../web3-connection/trainPokemon';

export default function PokemonInventory() {
	const [pokemons, setPokemons] = useState([]);
	const account = useAddress();
	const { contractAddress, contractABI } = useContract();
	function handlePokemonsFetch() {
		getPokemons(account, contractAddress, contractABI)
			.then((pokemonList) => {
				//console.log(pokemonList);
				setPokemons(pokemonList);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function handleSendOrCallPokemon(id,isReadyForBattle){
		if(isReadyForBattle){
			return new Promise ((resolve,reject)=>{
				callPokemon(id,account,contractAddress,contractABI)
				.then((transactionHash)=>{
					resolve(transactionHash)
				})
				.catch((err)=>{
					reject(err)
				})
			})
		}
		
		return new Promise ((resolve,reject)=>{
			sendPokemon(id,account,contractAddress,contractABI)
			.then((transactionHash)=>{
				resolve(transactionHash)
			})
			.catch((err)=>{
				reject(err)
			})
		})
	}
	function handleTrainPokemon(id){
		return new Promise((resolve,reject)=>{
			trainPokemon(id,account,contractAddress,contractABI)
			.then((receipt)=>{
				resolve(receipt)
			}).catch((err)=>{
				reject(err)
			})
		})
	}
	useEffect(() => {
        
        handlePokemonsFetch();

        
	}, [account]);
	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div className="row">
					{pokemons.length ? (
						pokemons.map((pokemon,key) => (
							<PokemonCard
                                key={key}
								attack={Number(pokemon.attack)}
								defense={Number(pokemon.defense)}
								id={Number(pokemon.id)}
								speed={Number(pokemon.speed)}
								name={pokemon.name}
								isReadyForBattle={pokemon.isReadyForBattle}
								handleSendOrCallPokemon={handleSendOrCallPokemon}
								handleTrainPokemon={handleTrainPokemon}
							/>
						))
					) : (
						<h1>Mint your Pokemons First!</h1>
					)}
				</div>
			</div>
		</div>
	);
}
