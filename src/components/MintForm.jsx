import {  useAddress } from '@thirdweb-dev/react';
import React, { useState } from 'react';
import { useContract } from '../contexts/ContractContext';
import { mintPokemon } from '../web3-connection/mintPokemon';
import Spinner from "react-bootstrap/Spinner"
function MintForm() {
    const account = useAddress()
    const { contractAddress,contractABI } = useContract();
    const [loading,setLoading] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        mintPokemon(account,contractAddress,contractABI).then((transactionHash)=>{
            alert(`Pokemon Minted: ${transactionHash}`)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    }
        
	return (
		<div>
			<div class="container col-xl-10 col-xxl-8 px-4 py-5">
				<div class="row align-items-center g-lg-5 py-5">
					<div class="col-lg-7 text-center text-lg-start">
						<h1 class="display-4 fw-bold lh-1 mb-3">
							Mint Your Pokemon!
						</h1>
						<p class="col-lg-10 fs-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestiae tempora a, enim omnis aliquam expedita cupiditate doloremque repellat. Facilis.
						</p>
					</div>
					<div class="col-md-10 mx-auto col-lg-5">
						<form class="p-4 p-md-5 border rounded-3 bg-light">
							<div class="form-floating mb-3">
								<input
                                   
									type="text"
									class="form-control"
									id="floatingInput"
									placeholder="0x0000000000000000000000000000000000000000"
                                    value={account?account:"Paste your public address here or connect your account"} 
								/>
								<label for="floatingInput"></label>
							</div>
							
							<button onClick={handleSubmit} class="w-100 btn btn-lg btn-danger" type="submit">
								{loading?(<Spinner animation='border' />):("Claim your Pokemon")}
							</button>
							<hr class="my-4" />
							<small class="text-muted">
								A NFT will be minted to your wallet.
							</small>
						</form>
					</div>
				</div>
			</div>
            
		</div>
	);
}

export default MintForm;