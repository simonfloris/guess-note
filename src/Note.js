import React, {Component} from 'react';
import {blackKeys} from "./constants";
import {lineWidth} from "./Sheet";
import Modifier from "./Modifier";
import {Motion, spring, StaggeredMotion} from "react-motion";
const SPRING_CONFIG = { stiffness: 400, damping: 28 };
const WOBBLY_SPRING = {stiffness: 280, damping: 12};

export const isBlackKey = (note) => {
    const octave = Math.floor(note - (note % 12));
    return blackKeys.indexOf(note - octave) > -1;
};

const upperStaff = 60;
const lowerStaff = 260;


class Note extends Component {
    render() {
        const {note, offset, noteModifier, style} = this.props;
        const {count, lineOffset, offsetModifier } = this.helpLines();
        const y = offset;
        const x = (-offset / 2) + 550;
        const clefOffset = {};
        return (
            <Motion
				defaultStyle={{x:x+Math.random()*40-40,y:y-20,rx:18,ry:15}}
				style={{x:spring(x,{...SPRING_CONFIG}),y:spring(y,{...SPRING_CONFIG}),rx:spring(13,{...WOBBLY_SPRING}),ry:spring(10,{...WOBBLY_SPRING})}}>
				{interpolatedStyle =>
            <g>
                <ellipse rx={interpolatedStyle.rx} ry={interpolatedStyle.ry} cx={interpolatedStyle.x} cy={interpolatedStyle.y} {...style}/>
                {count > 0 && [...Array(count)].map((val, index) => <line {...style} key={index} x1={interpolatedStyle.x - 18} x2={interpolatedStyle.x + 18}
                                                                          y1={y + index * offsetModifier  * lineWidth + lineOffset}
                                                                          y2={y + index * offsetModifier  * lineWidth + lineOffset}
                                                                          stroke="black" strokeWidth="1"/>)}
                {noteModifier&& <Modifier {...interpolatedStyle} type={noteModifier}/>}
            </g>}</Motion>

        );
    }

    helpLines = () => {
        const {note, offset} = this.props;
        let count = 0,
            lineOffset = 0,
            offsetModifier = 1;
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
            offsetModifier  = -1;
        }
        return {count, lineOffset, offsetModifier };

    }
}


export default Note;
