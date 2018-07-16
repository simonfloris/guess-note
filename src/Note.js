import React, {Component} from 'react';
import {notes, C0, C1, C2, C3, C4, C5, C6, C7, C8, blackKeys} from "./constants";
import clef from './asssets/clef.svg';
import bassClef from './asssets/bass-clef.svg';
const octavOffset=380;
const offsets = {
    [C0]: octavOffset*4,
    [C1]: octavOffset*3,
    [C2]: octavOffset*2,
    [C3]: octavOffset,
    [C4]: 0,
    [C5]: -octavOffset,
    [C6]: -octavOffset*2,
    [C7]: -octavOffset*3,
    [C8]: -octavOffset*4,
};
const offsetSharp={
    0:0,
    1:0,
    2:1,
    3:1,
    4:2,
    5:3,
    6:3,
    7:4,
    8:4,
    9:5,
    10:5,
    11:6
};
const offsetFlat={
    0:0,
    1:1,
    2:1,
    3:2,
    4:2,
    5:3,
    6:4,
    7:4,
    8:5,
    9:5,
    10:6,
    11:6
};

class Note extends Component {
    // state={
    //     ctx:null
    // };

    offset = (note,modifier='sharp') => {
        //get octave
        const octave = Math.floor(note - (note % 12));
        return offsets[octave] - this.noteOffset(note - octave,modifier);

    };

    noteOffset = (note,modifier='sharp') => {
        const offset=54;
        return modifier==='flat'?offsetFlat[note]*offset:offsetSharp[note]*offset;
    };

    render() {
        const {note} = this.props;
        // const offset= -((note-60)*56);
        const offset = this.offset(note);
        const modifier = this.modifier(note);
        const modifierClass = modifier ? ' sharp' : ' ';


        return (
            <div className='staffs'>
                {note && false && <span style={{
                    position: 'absolute',
                    left: '50%'
                }}> {notes[note].name}{notes[note].otherName} {note}</span>}
                <div className='staff staff-treble'>
                    <img className='head clef' src={clef}/>
                    <div className='lines' />
                </div>
                <div className='staff staff-help staff-treble'>
                    <div className='lines' />
                </div>
                <div className="staff staff-bass">
                    <img className='head bassClef' src={bassClef}/>
                    <div className='lines' />
                </div>
                <div className={`note note-${note}${modifierClass}`}
                     style={{transform: `translate(0,${offset}%)`}}>{modifier}</div>
            </div>);
    }


    modifier = (note) => {
        const octave = Math.floor(note - (note % 12));
        return blackKeys.indexOf(note - octave) > -1;
    }
}


export default Note;
