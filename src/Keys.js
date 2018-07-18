import React, {Component} from 'react';
import {C2, whiteKeys, blackKeys} from "./constants";
import Key from "./Key";
import {gameStates} from "./App";

export const keyTypes={
    black:'black',
    white:'white'
};

class Keys extends Component {
    static defaultProps = {
        startC: C2,
        octaveCount: 2,
        keyRange: []
    };
    whiteKeys = () => {
        return this.props.keyRange.filter(index => whiteKeys.includes(index % 12));
    };


    render() {
        const whiteKeys = this.whiteKeys();
        const {keyRange, onGuess, showKeyName, guessedNote, note,gameState} = this.props;
        return (
            <div className='keys'>
                {(keyRange).map((keyNo) => <Key
                        key={keyNo}
                        keyType={whiteKeys.includes(keyNo)?keyTypes.white:keyTypes.black}
                        keyNo={keyNo}
                        width={100 / whiteKeys.length}
                        showKeyName={showKeyName}
                        guessedNote={guessedNote}
                        onGuess={onGuess}
                        note={note}
                        gameState={gameState}
                    />
                )}
            </div>
        );
    }
}


export default Keys;
