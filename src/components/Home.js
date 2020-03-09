import React from 'react';
import './Home.css';
import YouTubeEmbed from './YouTubeEmbed';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="w-75 p-3">
				<YouTubeEmbed embedUrl="https://www.youtube.com/embed/nW9jjWBA4lE"></YouTubeEmbed>
			</div>
		);
	}
}

export default Home;
