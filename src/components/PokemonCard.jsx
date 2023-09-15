import React, { useState } from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
export default function PokemonCard({
	attack,
	speed,
	defense,
	id,
	name,
	isReadyForBattle,
	handleSendOrCallPokemon,
	handleTrainPokemon,
}) {
	const [loading, setLoading] = useState(false);
	const [trainBtnLoading, setTrainBtnLoading] = useState(false);
	const formattedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'No name provided';

	function handleClick() {
		setLoading(true);
		handleSendOrCallPokemon(id, isReadyForBattle)
			.then((transactionHash) => {
				console.log(transactionHash);
				let a = "mateus"
				console.log()
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	function handleTrainButtonClick() {
		setTrainBtnLoading(true);
		handleTrainPokemon(id)
			.then((transactionReceipt) => {
				console.log(transactionReceipt);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setTrainBtnLoading(false);
			});
	}
	return (
		<div className="col-md-4">
			<div className="card mb-4 shadow-sm">
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					alt="Image"
					width={'100%'}
				/>
				<div className="card-body">
					<h4>{formattedName}</h4>
				</div>
				{isReadyForBattle ? (
					<div className="card-body">
						<h6 className="text-danger">
							Out of the Pokeball and ready to battle!
						</h6>
					</div>
				) : (
					<div className="card-body">
						<h6 className="text-success">Sleeping inside the pokeball! </h6>
					</div>
				)}
				<div className="card-body">
					<p className="card-text"><strong>ID:</strong> {id}</p>
					<p className="card-text"> <strong>Attack:</strong>{attack}</p>
					<p className="card-text"> <strong>Defense:</strong> {defense}</p>
					<p className="card-text"> <strong>Speeed:</strong> {speed}</p>

					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							{isReadyForBattle ? (
								<>
									<div className="btn-group">
										<button
											type="button"
											className="btn btn-sm btn-success"
											onClick={handleClick}
										>
											{loading ? <Spinner /> : 'Back To the Pokeball!'}
										</button>
										<button
											type="button"
											className="btn btn-sm btn-info"
											onClick={handleTrainButtonClick}
										>
											{trainBtnLoading ? <Spinner /> : 'Train'}
										</button>
									</div>
								</>
							) : (
								<button
									type="button"
									className="btn btn-sm btn-warning"
									onClick={handleClick}
								>
									{loading ? <Spinner /> : 'Unleash Pokemon!'}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

