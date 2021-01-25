import './App.css';
import React from 'react';
import { questions } from './components/questions.js';

function displayMessage(e) {
	const worthy = 'Congratulations you may call Eddie 650-218-6940';
	document.getElementById('grats').innerHTML = worthy;
}

const areYouWorthy = questions.map((questions) => <li>{questions}</li>);

function App() {
	return (
		<div className="App">
			<container>
				<body>
					<div
						style={{
							color: 'white',
							backgroundColor: 'grey',
							borderRadius: '20px',
							padding: '20px',
							background:
								'-moz-linear-gradient(top, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%)',
						}}
					>
						<h1
							style={{
								color: 'white',
								fontSize: '80px',
								textShadow: '6px 6px black',
							}}
						>
							Are you worthy to hangout with Eddie?
						</h1>
						<div
							style={{
								color: 'white',
								fontSize: '40px',
								textShadow: '2px 2px black',
							}}
						>
							{areYouWorthy}
						</div>
						<div
							style={{
								fontSize: '30px',
								textShadow: '2px 2px black',
								margin: '30px',
								marginBottom: '30px',
							}}
						>
							click the "worthy button" if you thinkg you are ready
						</div>
						<button
							onClick={displayMessage}
							input="button"
							style={{
								cursor: 'pointer',
								height: '100px',
								width: '200px',
								color: 'white',
								background: 'red',
								fontSize: '40px',
								fontWeight: 'bold',
								borderRadius: '20px',
								margin: '10px',
								shadow: '4px 4px black',
							}}
						>
							WORTHY BUTTON
						</button>
						<div
							id="grats"
							style={{
								fontSize: '40px',
								color: 'red',
								textShadow: '2px 2px black',
								fontWeight: 'bold',
							}}
						></div>
					</div>
				</body>
			</container>
		</div>
	);
}

export default App;
