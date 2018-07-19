import React, {Component} from 'react';
import {blackKeys} from "./constants";
import {lineWidth} from "./Sheet";
import Modifier from "./Modifier";
import {Motion, spring, StaggeredMotion} from "react-motion";

const SPRING_CONFIG = {stiffness: 410, damping: 28};
const WOBBLY_SPRING = {stiffness: 380, damping: 12};

export const isBlackKey = (note) => {
    const octave = Math.floor(note - (note % 12));
    return blackKeys.indexOf(note - octave) > -1;
};

const upperStaff = 60;
const lowerStaff = 260;


class Note extends Component {
    static defaultProps = {
        style: {
            stroke: '#000',
            fill: '#000',
        }
    };

    render() {
        const {note, offset, noteModifier, style} = this.props;
        const {count, lineOffset, offsetModifier} = this.helpLines();
        const y = offset;
        const x = (-offset / 3) + 550;
        const rx = 13;
        const ry = 10;
        const clefOffset = {};
        return (
            <Motion
                defaultStyle={{x: x + Math.random() * 20 - 10, y: y - 30, rx: rx + 10, ry: ry + 10}}
                style={{
                    x: spring(x, {...SPRING_CONFIG}),
                    y: spring(y, {...SPRING_CONFIG}),
                    rx: spring(ry, {...SPRING_CONFIG}),
                    ry: spring(ry, {...SPRING_CONFIG})
                }}>
                {interpolatedStyle =>
                    <g>
                        <ellipse rx={interpolatedStyle.rx} ry={interpolatedStyle.ry} cx={interpolatedStyle.x}
                                 cy={interpolatedStyle.y} {...style}/>
                        {count > 0 && [...Array(count)].map((val, index) => <line {...style} key={index}
                                                                                  x1={interpolatedStyle.x - 20}
                                                                                  x2={interpolatedStyle.x + 20}
                                                                                  y1={y + index * offsetModifier * lineWidth + lineOffset}
                                                                                  y2={y + index * offsetModifier * lineWidth + lineOffset}
                                                                                  {...style} strokeWidth="1"/>)}
                        {noteModifier && <Modifier {...interpolatedStyle} {...style} type={noteModifier}/>}
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
            offsetModifier = -1;
        }
        return {count, lineOffset, offsetModifier};

    };
}


export default Note;
