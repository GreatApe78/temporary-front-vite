
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Header from './components/Header';
import MintForm from './components/MintForm';
import PokemonInventory from './components/PokemonInventory';
import PokemonBattlePool from './components/PokemonBattlePool';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<hr />
			<MintForm />
			<hr />
		
			<h1 className="display-2 text-center">Your inventory</h1>

			
			<PokemonInventory/>
			<h1 className="display-2 text-center">Battle Pool</h1>
			<PokemonBattlePool/>
			<ToastContainer />
		</div>
	);
}

export default App;
