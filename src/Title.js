import React from 'react';
import {Motion, spring} from "react-motion";

const WOBBLY_SPRING = {stiffness: 250, damping: 20};
const HARD_SPRING = {stiffness: 300, damping: 50};
const SMOOTH_SPRING = {stiffness: 120, damping: 20};

const Title = () => {

    return (
        <Motion
            defaultStyle={{rotate: 180,top: 100, scale: 20, o: 0.7,r:200,g:200,b:200}}
            style={{
                scale: spring(1, SMOOTH_SPRING),
                o: spring(1, HARD_SPRING),
                top: spring(0, HARD_SPRING),
                r: spring(2, WOBBLY_SPRING),
                g:spring(136, WOBBLY_SPRING),
                b:spring(209, WOBBLY_SPRING),
                rotate:spring(0, WOBBLY_SPRING),
            }}>
            {iStyle =>
                <div style={{
                    color: `rgba(${iStyle.r},${iStyle.g},${iStyle.b},${iStyle.o})`,
                    top: `${iStyle.top}%`,
                    transform: `rotate(${iStyle.rotate}deg) scale(${iStyle.scale},${iStyle.scale})`
                }} className="title"><h5>Rate die Note</h5></div>}</Motion>)
};

export default Title;
// rgb(1, 87, 155)