import React, {Component} from 'react';
import {octave} from "./constants";

// const white=[0,2,4,5,7,9,11];
// const black=[1,3,6,8,10];
class Octave extends Component {
    render() {
        const {startKey, onGuess, width,showKeyName} = this.props;
        return (
            <div className='octave' style={{width: `${width}%`}}>
                {octave.map((key, index) => <span key={key} onClick={() => {onGuess(index + startKey)}}
                                                  className={`key key-${key} key-${index + startKey}`}><span>{showKeyName ? key: '' }</span></span>)}
            </div>
        );
    }
}


export default Octave;
