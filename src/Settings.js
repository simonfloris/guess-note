import React, {Component} from 'react';
import {C1, C2, C3, C4, C5, notes, octave} from "./constants";
const MAX_KEY=108;
class Settings extends Component {
    render() {
        const {onSetRange, onSetStart, onToggleShowKeyName, showKeyName, startC, octaveCount, automatic, onToggleAutomatic, maxTries,tries, onSetTries} = this.props;
        const validRanges=[1, 2, 3, 4, 5].filter(range=>(startC+range*12)<MAX_KEY);
        const validStarts=[C5, C4, C3, C2, C1].filter(start=>(start+octaveCount*12)<MAX_KEY);
        return (
            <div className="settings">
                <div>
                    <div className="btn-group-vertical btn-group-justified tries">
                        <a href="#" role="button" className="btn btn-label btn-secondary" id="label-btn-tries"
                           aria-disabled="true">Versuche</a>
                        {[
                            [0, '\u221E'],
                            [4, '4'],
                            [3, '3'],
                            [2, '2'],
                            [1, '1'],
                        ].map(([val, label]) => <button
                            className={'btn btn-sm' + (maxTries === val ? ' btn-success' : ' btn-primary')}
                            key={val}

                            onClick={() => onSetTries(val)}>{tries&&maxTries!==1&&maxTries===val?`${tries}/${label}`:label}</button>)}
                    </div>
                    <div className="btn-group-vertical btn-group-justified start">
                        <a href="#" role="button" className="btn btn-label btn-secondary" id="label-btn-start"
                           aria-disabled="true">von</a>
                        {[C5, C4, C3, C2, C1].map((note) => <button
                            className={'btn btn-sm' + (startC === note ? ' btn-success' : ' btn-primary')}
                            disabled={!validStarts.includes(note)}
                            key={note}
                            onClick={() =>  onSetStart(note)}>{notes[note].otherName}</button>)}
                    </div>

                    <div className="btn-group-vertical btn-group-justified octaves">
                        <a href="#" role="button" className="btn btn-label btn-secondary" id="label-btn-range"
                           aria-disabled="true">{'<-->'}</a>
                        {[1, 2, 3, 4, 5].map((val) => <button
                            className={'btn btn-sm btn-flat' + (octaveCount === val ? ' btn-success' : ' btn-primary')}
                            key={val}
                            disabled={!validRanges.includes(val)}
                            onClick={() => onSetRange(val)}>{val}</button>)}
                    </div>
                </div>
                <div className="btn-group" id="otherSettings">

                    <button className={'btn' + (!showKeyName ? ' btn-secondary' : ' btn-success')}
                            onClick={onToggleShowKeyName}>Noten{showKeyName ? '!' : '?'}
                    </button>
                    <button className={'btn' + (!automatic ? ' btn-secondary' : ' btn-success')}
                            onClick={onToggleAutomatic}>ohne Pause{automatic ? '!' : '?'}</button>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {};

export default Settings;

// \u00A0 &nbsp;