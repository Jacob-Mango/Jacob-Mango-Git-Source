import React from 'react';
import './Error.css';

class Error extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Error">
				<h1>Error, the page could not be found!</h1>
			</div>
		);
	}
}

export default Error;
