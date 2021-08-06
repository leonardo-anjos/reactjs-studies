import React from 'react';
import logo from './logo.svg';
import './App.css';

import QRCode from 'qrcode.react'

function App() {
	return ( 
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo"/> */}
				<p>Edit <code>src/App.js</code> and save to reload.</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>  
				<QRCode value="b$_d0Pz_$x*af#=Zxh!S,aQm8dD2t^"/>
			</header>
		</div>
	);
}

export default App;