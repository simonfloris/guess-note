import React, {Component} from 'react';
import {Motion, spring} from "react-motion";

const WOBBLY_SPRING = {stiffness: 300, damping: 20};
const SMOOTH_SPRING = {stiffness: 254, damping: 20};

const Solve = ({guessedNote, note}) => {
    const correct = guessedNote === note;
    const text = correct ? 'Jaaaa' : 'Neeee';
    return (
        <Motion
            defaultStyle={{opacity: 0, scale: 0, right: 78}}
            style={{
                scale: spring(1, WOBBLY_SPRING),
                opacity: spring(1, WOBBLY_SPRING),
                right: spring(0, SMOOTH_SPRING),
            }}>
            {iStyle =>
                <div className={'solution'} style={{
                    right: iStyle.right,
                    opacity: iStyle.opacity,
                    transform: `scale(${iStyle.scale},${iStyle.scale})`
                }}>
                    <div className={correct ? 'right' : 'wrong'}>
                        {text}
                    </div>
                </div>}</Motion>
    );
};
export default Solve;
