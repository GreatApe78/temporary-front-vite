import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SmallPokemonCard from "./SmallPokemonCard";
import { useAddress } from "@thirdweb-dev/react";
import { useContract } from "../contexts/ContractContext";
import { battle } from "../web3-connection/battle";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ChoosePokemonMenu({
	pokemons,
	onHide,
	modalShow,
	target,
}) {

	
	const account = useAddress();
	const { contractAddress, contractABI } = useContract();
	const [selected, setSelected] = useState(false);
	function handleChoose(challengerId) {
		return new Promise((resolve, reject) => {
			console.log(contractABI);
			battle(challengerId, target, account, contractAddress, contractABI)
				.then((transaction) => {
					return transaction.wait(1)
				})
				.then((transactionReceipt)=>{
					const winnerId = Number(transactionReceipt.events[1].args.winner)
					notifyWinner(winnerId,target)
					console.log(transactionReceipt.events[1].args.winner)
					resolve(transactionReceipt)
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
	function notifyWinner(winner,opponent){
		if(winner ===opponent){
			toast.error("You LOST! ",{position:"top-center",autoClose:10000})
			return
		}
		toast.success("You WON!",{position:"top-center",autoClose:10000})
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
					Choose your pokemon:
				</Modal.Title>
				<Modal.Title id="contained-modal-title-vcenter">
					<div >
						 <img width={"85px"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${target}.svg`} alt="opponent image" />
					</div>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{pokemons.length ? (
					pokemons.map((pokemon, key) => (
						<SmallPokemonCard
							key={key}
							name={pokemon.name}
							id={Number(pokemon.id)}
							setSelected={setSelected}
							handleChoose={handleChoose}
						/>
					))
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
