import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
	// I know this is bad, i don't know how to store it somewhere else
	const config = {headers: {Accept: 'application/json', Authorization: 'Bearer 1MKl2KScejiFK35UC3hF'}};
	const apiUrl = 'https://the-one-api.dev/v2/'
	const [characters, setCharacters] = useState([]);
	const [favorites, setFavorites] = useState();

	function getCharacters() {
		if (characters.length === 0 || !characters) {
			axios.get(`${apiUrl}character`, config).then(r => {
				setCharacters(r.data.docs);
				console.log(r.data.docs)
			});
		}
	}

	getCharacters()

	return (
		<div className="App">
			<header className="App-header">
				<h1>The Lord Of The Rings</h1>
				<div>
					<h3>Characters</h3>
					{characters.map((character) => (
						<h4 key={character._id}> {character.name}</h4>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
