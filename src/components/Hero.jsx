//import ConnectWalletBtn from './ConnectWalletBtn';
import { ConnectWallet } from "@thirdweb-dev/react";
import pikachuLogo from "../assets/picachu_logo.jpg"
export default function Hero() {
	
	return (
		<div className="container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src={pikachuLogo}
						className="d-block mx-lg-auto img-fluid rounded"
						alt="Bootstrap Themes"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
				<div className="col-lg-6">
					<h1 className="display-5 fw-bold lh-1 mb-3">
						Crypto NFT Game!
					</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi possimus praesentium obcaecati adipisci perferendis minima deserunt! Iusto blanditiis alias debitis.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						{/* <ConnectWalletBtn /> */}
						<ConnectWallet switchToActiveChain  />
						
					</div>
				</div>
			</div>
		</div>
	);
}