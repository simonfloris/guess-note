import React, {Component} from 'react';
import {notes, C0, C1, C2, C3, C4, C5, C6, C7, C8, blackKeys} from "./constants";
import clef from './asssets/clef.svg';
import bassClef from './asssets/bass-clef.svg';
import Staff from "./Staff";
import Note, {isBlackKey} from "./Note";

const octavOffset = 10*7;
const offsets = {
    [C0]: octavOffset * 4,
    [C1]: octavOffset * 3,
    [C2]: octavOffset * 2,
    [C3]: octavOffset,
    [C4]: 0,
    [C5]: -octavOffset,
    [C6]: -octavOffset * 2,
    [C7]: -octavOffset * 3,
    [C8]: -octavOffset * 4,
};
export const offsetSharp = {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 2,
    5: 3,
    6: 3,
    7: 4,
    8: 4,
    9: 5,
    10: 5,
    11: 6
};
export const offsetFlat = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3,
    6: 4,
    7: 4,
    8: 5,
    9: 5,
    10: 6,
    11: 6
};

class Sheet extends Component {
    // state={
    //     ctx:null
    // };

    offset = (note, modifier = 'sharp') => {
        //get octave
        const octave = Math.floor(note - (note % 12));
        return offsets[octave] - this.noteOffset(note - octave, isBlackKey);

    };

    noteOffset = (note, modifier = 'sharp') => {
        const offset = 10;
        return isBlackKey === 'flat' ? offsetFlat[note] * offset : offsetSharp[note] * offset;
    };

    render() {
        const {note} = this.props;
        const blackKey = isBlackKey(note);
        let modifierType;
        if (blackKey) {
            const coin = Math.floor(Math.random() + 1);
            modifierType = coin ? 'sharp' : 'flat';
        }
        const offset = this.offset(note, modifierType);
        const modifierClass = blackKey ? ` ${modifierType}` : ' ';

        return (
            <div className='staffs'>
                <div className='staff'>
                    <img className='head clef' src={clef}/>
                    <img className='head bassClef' src={bassClef}/>
                    <Staff>{note && <Note offset={offset+160} note={note} modifierType={modifierType}/>}</Staff>
                </div>

            </div>);
    }


}


export default Sheet;
