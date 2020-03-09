import React from 'react';
import './YouTubeEmbed.css';

class YouTubeEmbed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-75 p-3 d-flex">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src={this.props.embedUrl}></iframe>
                </div>
                <div className="w-75 ml-auto">
                    <blockquote class="blockquote">
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default YouTubeEmbed;
