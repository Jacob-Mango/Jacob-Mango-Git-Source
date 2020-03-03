import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class NavbarLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li className="nav-item">
				<Link to={this.props.to} className="nav-link">{this.props.children}</Link>
			</li>
		);
	}
}

export default NavbarLink;