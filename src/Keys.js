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
        const {startC, octaveCount, onGuess,showKeyName,guessedNote,note} = this.props;
        return (
            <div className='keys'>
                {[...Array(octaveCount)].map((val, index) => <Octave
                    key={startC + (index * 12)}
                    startKey={startC + (index * 12)}
                    width={100 / octaveCount}
                    showKeyName={showKeyName}
                    guessedNote={guessedNote}
                    onGuess={onGuess}
                    note={note}
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
