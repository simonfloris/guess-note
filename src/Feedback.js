import React, {Component} from 'react';
import {notes} from './constants';

class Feedback extends Component {
    render() {
        const{note}=this.props;
        return (
            <div className={'feedback'}>
                {note && notes[note].name}
                &nbsp;{note && note}
            </div>
        );
    }
}

Feedback.propTypes = {};

export default Feedback;
