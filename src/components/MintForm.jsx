import { useAddress } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { useContract } from "../contexts/ContractContext";
import { mintPokemon } from "../web3-connection/mintPokemon";
import Spinner from "react-bootstrap/Spinner";
function MintForm() {
	

	const account = useAddress();
	const { contractAddress, contractABI } = useContract();
	const [loading, setLoading] = useState(false);
	const [transactionHash, setTransactionHash] = useState(null);
	function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		mintPokemon(account, contractAddress, contractABI)
			.then((transactionHash) => {
				console.log(transactionHash)
				setTransactionHash(transactionHash);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
				
			});
	}

	return (
		<div>
			<div className="container col-xl-10 col-xxl-8 px-4 py-5">
				<div className="row align-items-center g-lg-5 py-5">
					<div className="col-lg-7 text-center text-lg-start">
						<h1 className="display-4 fw-bold lh-1 mb-3">Mint Your Pokemon!</h1>
						<p className="col-lg-10 fs-4">
							Click in The button to receive the next Pokemon in the Pokedex order!
						</p>
					</div>
					<div className="col-md-10 mx-auto col-lg-5">
						<form className="p-4 p-md-5 border rounded-3 bg-light">
							<div className="form-floating mb-3">
								<input
									type="text"
									className="form-control"
									id="floatingInput"
									readOnly
									placeholder="0x0000000000000000000000000000000000000000"
									value={
										account
											? account
											: "Paste your public address here or connect your account"
									}
								/>
								<label htmlFor="floatingInput">Ethereum Address</label>
							</div>
							
							<button
								onClick={handleSubmit}
								className="w-100 btn btn-lg btn-danger"
								type="submit"
							>
								{loading ? (
									<Spinner animation="border" />
								) : (
									"Claim your Pokemon"
								)}
							</button>

							<hr className="my-4" />
							<small className="text-muted">
								A NFT will be minted to your wallet.
							</small>
							<br />
							<small className="text-muted">
								{transactionHash ? (
									<a
										className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark "
										target="_blank"
										href={`https://testnet.ftmscan.com/tx/${transactionHash.hash}`}
									>
										Follow Your Transaction HERE!
									</a>
								) : (
									""
								)}
							</small>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MintForm;
