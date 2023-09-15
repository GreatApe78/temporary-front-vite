import { useState } from "react";


export default function BattleCard({
	attack,
	speed,
	defense,
	id,
	name,
	trainer,
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
	const formattedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'No name provided';
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
					<h4>{formattedName}</h4>
				</div>
				<div className="card-body">
					<p className="card-text"> <strong>ID:</strong> {id} </p>
					<p className="card-text"> <strong>Attack:</strong> {attack}</p>
					<p className="card-text"> <strong>Defense:</strong> {defense}</p>
					<p className="card-text"> <strong>Speed:</strong> {speed}</p>
                    <p className="card-text"> <strong>Trainer:</strong> {shortenEthereumAddress(trainer)}</p>

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
