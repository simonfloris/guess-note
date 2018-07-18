import React, {Component} from 'react';

const Solve = ({guessedNote, note}) => {
    const correct = guessedNote === note;
    const text = correct ? 'Jaaaa' : 'Neeee';
    return (
        <div className={'solution'}>
            <div className={correct ? 'right' : 'wrong'}>
                {text}
            </div>
        </div>
    );
};
export default Solve;
