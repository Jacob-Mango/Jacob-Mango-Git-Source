import React from 'react';

import './Navbar.css';

import NavbarLink from './NavbarLink';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
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