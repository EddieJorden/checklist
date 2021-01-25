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
				<body style={{ background: 'grey' }}>
					<div style={{ color: 'red' }}>
						<h1 style={{ color: 'red', background: 'aquamarine' }}>
							"are you worthy to hangout with Eddie?"
						</h1>
						<div style={{ color: 'white' }}>{questions}</div>
						<button
							onClick={displayMessage}
							input="button"
							style={{ cursor: 'pointer' }}
							width="60px"
							color="red"
						>
							I believe i am worthy
						</button>
						<div id="grats"></div>
					</div>
				</body>
			</container>
		</div>
	);
}

export default App;
