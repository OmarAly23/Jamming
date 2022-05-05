import React from 'react';
import './track.css';
import Track from './Track';

class TrackList extends React.Component {
    constructor(props) {

        super(props);
        
        this.renderAction = this.renderAction.bind(this);
        
        this.addTrack = this.addTrack.bind(this);
        
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            <button class="Track-action">--</button>
        } else {
            <button class="Track-action">+</button>
        }
    }

    render() {
        return(
            <div class="Track">
            <div class="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            {this.renderAction()}
            </div>
        );
    }
}

export default TrackList;