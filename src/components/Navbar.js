import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './Navbar.css';

import NavbarLink from './NavbarLink';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {brand: "Ford"};
	}

	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-light justify-content-center">
				<ul className="navbar-nav">
					<NavbarLink to="/">Home</NavbarLink>
				</ul>
			</nav>
		);
	}
}

export default Navbar;