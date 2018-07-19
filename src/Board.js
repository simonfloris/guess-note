import React, {Component} from 'react';
import {notes} from './constants';
import {gameStates} from "./App";

class Board extends Component {
    render() {
        const {note, gameState, showKeyName, score} = this.props;
        return (
            <div className={'boardWrapper'}>
                <div className={'board'}>
                    <h2 className='score'>{score}</h2>
                    <div>{gameState === gameStates.playing && <h6>Drücke die richtige Taste auf dem Klavier</h6>}</div>
                    <div>{showKeyName && note && <span> {notes[note].otherName}</span>}</div>
                </div>
            </div>
        );
    }
}

Board.propTypes = {};

export default Board;
