import React from 'react';
import {noteModifiers} from "./constants";

const Sharp = ({color='#000'}) => <g stroke={color} fill={color} transform={'matrix(0.07,0,0,-0.07,0,36)'}>
    <path
        d="m 216,-312 c 0,-10 -8,-19 -18,-19 -10,0 -19,9 -19,19 v 145 l -83,-31 v -158 c 0,-10 -9,-19 -19,-19 -10,0 -18,9 -18,19 v 145 l -32,-12 c -2,-1 -5,-1 -7,-1 -11,0 -20,9 -20,20 v 60 c 0,8 5,16 13,19 l 46,16 V 51 L 27,40 C 25,39 22,39 20,39 9,39 0,48 0,59 v 60 c 0,8 5,15 13,18 l 46,17 v 158 c 0,10 8,19 18,19 10,0 19,-9 19,-19 V 167 l 83,31 v 158 c 0,10 9,19 19,19 10,0 18,-9 18,-19 V 211 l 32,12 c 2,1 5,1 7,1 11,0 20,-9 20,-20 v -60 c 0,-8 -5,-16 -13,-19 L 216,109 V -51 l 32,11 c 2,1 5,1 7,1 11,0 20,-9 20,-20 v -60 c 0,-8 -5,-15 -13,-18 l -46,-17 V -312 z M 96,65 V -95 l 83,30 V 95 z"
    />
</g>;

const Flat = ({color='#000'}) => <g stroke={color} fill={color} transform={'matrix(0.07,0,0,-0.07,0.108,36.86)'}>
    <path
        d="m 27,41 -1,-66 v -11 c 0,-22 1,-44 4,-66 45,38 93,80 93,139 0,33 -14,67 -43,67 C 49,104 28,74 27,41 z m -42,-179 -12,595 c 8,5 18,8 27,8 9,0 19,-3 27,-8 L 20,112 c 25,21 58,34 91,34 52,0 89,-48 89,-102 0,-80 -86,-117 -147,-169 -15,-13 -24,-38 -45,-38 -13,0 -23,11 -23,25 z"
    />
</g>;

const Modifier = ({type, x, y,stroke}) => {
    return <svg x={x - 39} y={y - 36}>
        {type === noteModifiers.flat && <Flat color={stroke}/>}
        {type === noteModifiers.sharp && <Sharp color={stroke}/>}
    </svg>
};

export default Modifier;
