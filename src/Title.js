import React from 'react';
import {Motion, spring} from "react-motion";

const WOBBLY_SPRING = {stiffness: 300, damping: 20};
const HARD_SPRING = {stiffness: 400, damping: 100};
const SMOOTH_SPRING = {stiffness: 254, damping: 20};

const Title = () => {

    return (
        <Motion
            defaultStyle={{top: 10, scale: 6, o: 0.7,r:255,g:0,b:0}}
            style={{
                scale: spring(1, SMOOTH_SPRING),
                o: spring(1, HARD_SPRING),
                top: spring(0, WOBBLY_SPRING),
                r: spring(2, WOBBLY_SPRING),
                g:spring(136, WOBBLY_SPRING),
                b:spring(209, WOBBLY_SPRING),
            }}>
            {iStyle =>
                <div style={{
                    color: `rgba(${iStyle.r},${iStyle.g},${iStyle.b},${iStyle.o})`,
                    top: iStyle.top,
                    transform: `scale(${iStyle.scale},${iStyle.scale})`
                }} className="title"><h5>Rate die Note</h5></div>}</Motion>)
};

export default Title;
// rgb(1, 87, 155)