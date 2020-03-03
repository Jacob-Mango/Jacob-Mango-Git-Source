import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';
import Error from './components/Error';

function App() {
	return (
		<main>
			<Navbar />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route component={Error} />
			</Switch>
		</main>
	)
}

export default App;
