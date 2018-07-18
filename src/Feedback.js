import React, {Component} from 'react';
import {notes} from './constants';
import {gameStates} from "./App";

class Feedback extends Component {
    render() {
        const{note,gameState,showKeyName,score}=this.props;
        return (

            <div className={'feedback'}>
                <h3>{score}</h3>
                {gameState===gameStates.playing &&<div><h5>Drücke die richtige Taste auf dem Klavier</h5></div>}
                {showKeyName&&  note && <span> {notes[note].otherName}</span>}

            </div>
        );
    }
}

Feedback.propTypes = {};

export default Feedback;
