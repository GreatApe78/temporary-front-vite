
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/Hero';
import Header from './components/Header';
import MintForm from './components/MintForm';
import PokemonCard from './components/PokemonCard';
import PokemonInventory from './components/PokemonInventory';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<hr />
			<MintForm />
			
			<h1 className='p-1 text-center'>Your Pokemon Inventory</h1>
			<PokemonInventory/>
		</div>
	);
}

export default App;
