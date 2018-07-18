import React, {Component} from 'react';
import {blackKeys} from "./constants";

export const isBlackKey = (note) => {
    const octave = Math.floor(note - (note % 12));
    return blackKeys.indexOf(note - octave) > -1;
};

const upperStaff = 60;
const lowerStaff = 260;
const lineWidth = 20;

class Note extends Component {
    render() {
        const {note, offset, modifierType} = this.props;
        const {count, lineOffset, modifier} = this.helpLines();
        const y = offset;
        const x = (-offset / 2) + 550;
        const clefOffset = {};
        return (
            <g>
                <ellipse rx={13} ry={10} cx={x} cy={y}/>
                {count > 0 && [...Array(count)].map((val, index) => <line key={index} x1={x - 18} x2={x + 18}
                                                                          y1={y + index * modifier * lineWidth + lineOffset}
                                                                          y2={y + index * modifier * lineWidth + lineOffset}
                                                                          stroke="black" strokeWidth="1"/>)}
            </g>

        );
    }

    helpLines = () => {
        const {note, offset} = this.props;
        let count = 0,
            lineOffset = 0,
            modifier = 1;
        if (note === 60) {
            count = 1;
        }
        else if (note > 80) {
            count = Math.floor((upperStaff - offset) / lineWidth);
            lineOffset = (offset + 20) % 20;
        }
        else if (offset > lowerStaff) {
            count = Math.floor((offset - lowerStaff) / lineWidth);
            lineOffset = -(offset + 20) % 20;
            modifier = -1;
        }
        console.log(count, lineOffset, modifier);

        return {count, lineOffset, modifier};

    }
}


export default Note;
