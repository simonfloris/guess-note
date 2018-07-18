import React, {Component} from 'react';
import {octave} from "./constants";

// const white=[0,2,4,5,7,9,11];
// const black=[1,3,6,8,10];
class Octave extends Component {
    render() {
        const {startKey, onGuess, width, showKeyName, note,guessedNote} = this.props;

        return (<div className='octave' style={{width: `${width}%`}}>
                {octave.map((key, index) => {
                    const keyNo = index + startKey;
                    const className=`key key-${key}${(guessedNote && keyNo === note)? ' key-correct' : ''} key-${keyNo}`;
                    return (<span key={key}
                                 onMouseUp={() => {onGuess(keyNo)}}
                        className={className}><span>{showKeyName ? key : ''}</span></span>)})}</div>);
    }
}


export default Octave;

