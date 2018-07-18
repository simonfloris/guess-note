import React, {Component} from 'react';
import {C1, C2, C3, C4, C5, notes, octave} from "./constants";

class Settings extends Component {
    render() {
        const {onSetRange, onSetStart, onToggleShowKeyName, showKeyName, startC, octaveCount,automatic,onToggleAutomatic} = this.props;
        return (
            <div className="settings">
                <div>
                    <div className="btn-group-vertical btn-group-justified">
                        <a href="#" role="button" className="btn btn-label btn-success" id="label-btn-start"
                           aria-disabled="true">Start</a>
                        {[C1, C2, C3, C4, C5].map((note) => <button
                            className={'btn btn-sm' + (startC === note ? ' btn-primary' : ' btn-secondary')}
                            key={note}
                            onClick={() => onSetStart(note)}>{notes[note].name}</button>)}
                    </div>

                    <div className="btn-group-vertical btn-group-justified">
                        <a href="#" role="button" className="btn btn-label btn-success" id="label-btn-range"
                           aria-disabled="true">{'<-->'}</a>
                        {[1, 2, 3, 4, 5].map((val) => <button
                            className={'btn btn-sm btn-flat' + (octaveCount === val ? ' btn-primary' : ' btn-secondary')}
                            key={val}
                            onClick={() => onSetRange(val)}>{val}</button>)}
                    </div>
                </div>
                 <div className="btn-group ">

                    <button className={'btn'+ (!showKeyName?' btn-secondary':' btn-success')}
                            onClick={onToggleShowKeyName}>Notennamen {showKeyName ? '!' : '?'}
                    </button>
                    <button className={'btn'+ (!automatic?' btn-secondary':' btn-success')}
                            onClick={onToggleAutomatic}>direkt weiter{automatic ? '!' : '?'}</button>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {};

export default Settings;
