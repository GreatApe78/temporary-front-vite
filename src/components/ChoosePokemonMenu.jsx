import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SmallPokemonCard from "./SmallPokemonCard";
import { useAddress } from "@thirdweb-dev/react";
import { useContract } from "../contexts/ContractContext";
import { battle } from "../web3-connection/battle";
import { useState } from "react";

export default function ChoosePokemonMenu({ pokemons, onHide, modalShow,target}) {
	const account = useAddress()
	const {contractAddress,contractABI} = useContract()
	const [selected,setSelected] = useState(false)
	function handleChoose(challengerId){
		return new Promise((resolve,reject)=>{
			console.log(contractABI)
			battle(challengerId,target,account,contractAddress,contractABI)
			.then((transaction)=>{
				resolve(transaction)
			})
			.catch((err)=>{
				reject(err)
			})
		})
	}
	return (
		<Modal
			show={modalShow}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Choose Your Pokemon to fight: 
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{pokemons.length ? (
					pokemons.map((pokemon, key) => <SmallPokemonCard key={key}
					name={pokemon.name}
					id={Number(pokemon.id)}
					setSelected={setSelected}
					handleChoose={handleChoose}
					/>)
				) : (
					<p></p>
				)}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
