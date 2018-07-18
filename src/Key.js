import React, {Component} from 'react';
import {keyTypes} from "./Keys";
import {octave} from "./constants";
// const white=[0,2,4,5,7,9,11];
// const black=[1,3,6,8,10];
class Key extends Component {
    render() {
        const {keyNo,keyType, onGuess, width, showKeyName, note, guessedNote, gameState} = this.props;
        const className = `key key-${keyType}${(guessedNote && keyNo === note) ? ' key-correct' : ''} key-${keyNo}`;
        const styleWidth=keyType===keyTypes.white?`${width}%`:`${width}%`;
        return (<span style={{width: styleWidth}}
                      onClick={e => {
                          e.stopPropagation()
                      }}
                      onMouseUp={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          if (!guessedNote) {
                              onGuess(keyNo)
                          }
                      }}
                      className={className}><span>{showKeyName ? octave[keyNo%12] : ''}</span></span>);
    }
}

export default Key;

