
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/Hero';
import Header from './components/Header';
import MintForm from './components/MintForm';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<hr />
			<MintForm />
		</div>
	);
}

export default App;
