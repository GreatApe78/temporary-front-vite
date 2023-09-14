
import { useAddress } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'
import { useContract } from '../contexts/ContractContext'
import { getPokemonsReadyForBattle } from '../web3-connection/getPokemonsReadyForBattle'
import BattleCard from './BattleCard'
import ChoosePokemonMenu from './ChoosePokemonMenu'

export default function PokemonBattlePool() {

    const account = useAddress()
    const [modalShow, setModalShow] = useState(false);
    const [target,setTarget] = useState(null)
    const {contractAddress,contractABI} = useContract()
    const [filteredPokemons,setFilteredPokemons] = useState([])
    const [userPokemonsReady,setUserPokemonsReadyForBattle] = useState([])
    useEffect(()=>{

        handlePokemonsReadyForBattle()
        
    },[account])
    function handlePokemonsReadyForBattle(){
        getPokemonsReadyForBattle(account,contractAddress,contractABI)
        .then((allPokemonsReadyForBattle)=>{
             
            
            setFilteredPokemons(filterPokemonsThatAreNotFromCaller(account,allPokemonsReadyForBattle))
            setUserPokemonsReadyForBattle(filterPokemonsThatAreCallers(account,allPokemonsReadyForBattle))
        }).catch((err)=>{
            console.log(err)
        })
    }
    function filterPokemonsThatAreNotFromCaller(callerAddress, pokemonsArray) {
        // Use the Array.prototype.filter() method to filter the array
       
        const filteredArray = pokemonsArray.filter(pokemon => {
          // Check if the trainer's address is not equal to the caller's address
          return pokemon.trainer !== callerAddress
        });
      
        return filteredArray;
      }
      function filterPokemonsThatAreCallers(callerAddress, pokemonsArray) {
        // Use the Array.prototype.filter() method to filter the array
       
        const filteredArray = pokemonsArray.filter(pokemon => {
          // Check if the trainer's address is not equal to the caller's address
          return pokemon.trainer === callerAddress
        });
      
        return filteredArray;
      }
    function closeModal(){
        setModalShow(false)
    }
  return (
    <div className="album py-5 bg-light">
			<div className="container ">
				<div className="row">
					{filteredPokemons.length ? (
						filteredPokemons.map((pokemon,key) => (
							<BattleCard 
                            attack={Number(pokemon.attack)}
                            defense={Number(pokemon.defense)}
                            id={Number(pokemon.id)}
                            name={pokemon.name}
                            speed={Number(pokemon.speed)}
                            trainer={pokemon.trainer}
                            key={key}
                            setModalShow={setModalShow}
                            setTarget={setTarget}
                            />
						))
					) : (
						<h1>No Pokemons in Battle Pool!</h1>
					)}
				</div>
                <ChoosePokemonMenu pokemons={userPokemonsReady} modalShow={modalShow} onHide={closeModal} target={target} />
			</div>
		</div>
  )
}
