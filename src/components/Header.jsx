import { useContract } from "../contexts/ContractContext";

export default function Header() {
	const {contractAddress} = useContract()
	return (
		<div className="container">
			<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"
						width="40"
						alt="Logo"
					/>
					<span className="fs-4">CryptoNFTGame</span>
				</a>

				<ul className="nav nav-pills">
					<li className="nav-item">
						<a target="_blank" href={`https://testnet.ftmscan.com/address/${contractAddress}`} className="nav-link active bg-dark" aria-current="page">
							View contract on Explorer
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
}
