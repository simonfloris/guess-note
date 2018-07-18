import React, {Component} from 'react';
import Line from "./Line";

class Staff extends Component {
    render() {
        return (
            <svg className='lines' width="800" height="320">
                {[60,80,100,120,140,180,200,220,240,260].map(y=><Line  key={y} y={y}/>)}
                {this.props.children}
            </svg>
        );
    }
}


export default Staff;
