import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Octave from "./Octave";
import {C2} from "./constants";


class Keys extends Component {
    static defaultProps = {
        startC: C2,
        octaveCount: 2
    };

    render() {
        const {startC, octaveCount, onGuess,showKeyName} = this.props;
        return (
            <div className='keys'>
                {[...Array(octaveCount)].map((val, index) => <Octave
                    key={startC + (index * 12)} onGuess={onGuess}
                    startKey={startC + (index * 12)}
                    width={100 / octaveCount}
                    showKeyName={showKeyName}
                    />
                    )}
            </div>
        );
    }
}

Keys.propTypes = {
    startC: PropTypes.number,
    octaveCount: PropTypes.number

};

export default Keys;
