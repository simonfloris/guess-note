import React, {PureComponent} from 'react';
import {notes, C0, C1, C2, C3, C4, C5, C6, C7, C8, C9, blackKeys, noteModifiers} from "./constants";
import Staff from "./Staff";
import Note, {isBlackKey} from "./Note";
import {gameStates} from "./App";
import Title from "./Title";

export const lineWidth = 20;
const octaveOffset = 10 * 7;
const offsets = {
    [C0]: octaveOffset * 4,
    [C1]: octaveOffset * 3,
    [C2]: octaveOffset * 2,
    [C3]: octaveOffset,
    [C4]: 0,
    [C5]: -octaveOffset,
    [C6]: -octaveOffset * 2,
    [C7]: -octaveOffset * 3,
    [C8]: -octaveOffset * 4,
    [C9]: -octaveOffset * 5,
};
//position of Notes with sharps
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
    11: 6,
    12: 7
};
//position of Notes in the Octave with flats
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
    11: 6,
    12: 7
};
const octaveHeight = 160;
const staffLineHeight = 20;


class Sheet extends PureComponent {

    offset = (note, noteModifier = noteModifiers.sharp) => {
        //get octave
        const octave = Math.floor(note - (note % 12));
        return offsets[octave] - this.noteOffset(note - octave, noteModifier) + octaveHeight;
    };

    noteOffset = (note, noteModifier = noteModifiers.sharp) => {
        const offset = staffLineHeight / 2;
        return noteModifier === noteModifiers.flat ? offsetFlat[note] * offset : offsetSharp[note] * offset;
    };

    getModifierAndOffset(note) {
        const blackKey = isBlackKey(note);
        let noteModifier;
        if (blackKey) {
            noteModifier = this.props.noteModifier;
        }
        return {offset: this.offset(note, noteModifier), noteModifier: noteModifier};
    }

    render() {
        const {note, guessedNote, gameState} = this.props;
        return (

            <div className='staffs'>
                <Title/>
                <div className='staff'>
                    <Staff>
                        {note &&
                        <Note note={note} {...this.getModifierAndOffset(note)}/>}
                        {guessedNote && gameState !== gameStates.init &&
                        <Note note={guessedNote} {...this.getModifierAndOffset(guessedNote)}
                              style={{
                                  fill: guessedNote === note ? 'green' : 'red',
                                  stroke: guessedNote === note ? 'green' : 'red'
                              }
                              }/>}
                    </Staff>
                </div>
            </div>);
    }


}


export default Sheet;
