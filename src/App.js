import './App.css';
import React from 'react';
import { reasons } from './components/reasons.js';

const title = '';

const background = (
	<img className="background" alt="background name" src="sacredgpurp.jpeg" />
);

//const cantHangOut = []

/*for (const reason in reasons) {
  cantHangOut.push(

  )
}*/

function App() {
	console.log(reasons);
	return (
		<div className="App">
			<h1>
				{title === '' ? "Reasons why you can't hangout with Eddie" : title}
			</h1>
			<div>
				{reasons.map((reason) => (
					<span>
						<li role="button" onClick="">
							{reason}
						</li>
						<input type="checkbox"></input>
					</span>
				))}
			</div>
			<div>{background}</div>
			<img src="nebula.jpg" alt="nebula" />
		</div>
	);
}

export default App;
