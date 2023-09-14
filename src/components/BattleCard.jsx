import { useState } from "react";


export default function BattleCard({
	attack,
	speed,
	defense,
	id,
	name,
	trainer,
    handleBattle,
	setModalShow,
	setTarget
}) {

    const [loading,setLoading] = useState(false)

	function handleBattleClick() {
        setModalShow(true)
		setTarget(id)
    }
    function shortenEthereumAddress(address) {
        if (address.length < 10) {
            return address; // Address is too short, return as-is
        }
        
        const prefix = address.substring(0, 6);
        const suffix = address.substring(address.length - 4);
        
        return `${prefix}...${suffix}`;
    }
	return (
		<div className="col-md-4 ">
			<div className="card mb-4 shadow-sm  p-3">
				<img
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
					alt="Image"
					width={'100%'}
				/>
                <div className='bg-light rounded'>
                <div className="card-body">
					<h4>{name ? name : 'No name provided'}</h4>
				</div>
				<div className="card-body">
					<p className="card-text">ID: {id}</p>
					<p className="card-text">Attack: {attack}</p>
					<p className="card-text">Defense: {defense}</p>
					<p className="card-text">Speed: {speed}</p>
                    <p className="card-text">Trainer: {shortenEthereumAddress(trainer)}</p>

					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-sm btn-success"
								onClick={handleBattleClick}
							>
								 {loading ? <Spinner /> : 'BATTLE!'} 
							</button>
						</div>
					</div>
				</div>
                </div>
				
			</div>
		</div>
	);
}
