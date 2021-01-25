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
							margin: '40px',
						}}
					>
						<h1
							style={{
								color: 'white',
								fontSize: '80px',
								textShadow: '6px 6px black',
							}}
						>
							Are you worthy of hanging out with Eddie?
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
							click the "worthy button" if you THINK you are ready
						</div>
						<button
							onClick={displayMessage}
							input="button"
							style={{
								cursor: 'pointer',
								height: '120px',
								width: '220px',
								color: 'white',
								background: 'red',
								fontSize: '40px',
								fontWeight: 'bold',
								borderRadius: '20px',
								margin: '10px',
								boxShadow: '5px 5px black',
								textShadow: '2px 2px black',
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
