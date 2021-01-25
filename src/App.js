import './App.css';
import React from 'react';
import { questions } from './components/questions.js';

function displayMessage(e) {
	const worthy = 'congratulations you are worthy!';
	document.getElementById('grats').innerHTML = worthy;
}

function App() {
	return (
		<div className="App">
			<container>
				<body>
					<div style={{ color: 'red' }}>
						<h1 style={{ color: 'red', fontSize: '80px' }}>
							"are you worthy to hangout with Eddie?"
						</h1>
						<li style={{ color: 'white', fontSize: '40px' }}>{questions}</li>
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
							}}
						>
							I am worthy!
						</button>
						<div id="grats" style={{ fontSize: '40px', color: '' }}></div>
					</div>
				</body>
			</container>
		</div>
	);
}

export default App;
