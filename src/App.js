import React, {Component} from 'react';
import Note from "./Note";
import Keys from "./Keys";
import {C2, C3, notes} from "./constants";
import Solve from "./Solve";

class App extends Component {
    state = {
        guessedNote: null,
        note: 48,
        startC: C3,
        octaveCount: 3,
        showKeyName: false
    };

    componentDidMount() {
        setInterval(this.setGuess,400);
    }

    render() {
        const {guessedNote, note, startC, octaveCount,showKeyName} = this.state;
        return (
            <div className="App">
                <Note note={note} guessedNote={guessedNote}/>
                <Keys onGuess={this.onGuess} startC={startC} octaveCount={octaveCount} showKeyName={showKeyName}/>
                {guessedNote && <div className={'solution'}><Solve guessedNote={guessedNote} note={note}/></div>}
            </div>
        );
    }

    setGuess = () => {
        const {startC, octaveCount} = this.state;
        const max=(octaveCount * 12)+startC;
        const note =Math.max(((this.state.note+12)%(max)),startC);
        //const note=Math.floor(Math.random() * octaveCount * 12) + startC;
        // console.log(note);
        this.setState({
            note: note,
            guessedNote: null,
            guessReact: null,
        })

    };
    onNext = () => {
        this.setGuess();
    };
    onGuess = (key) => {
        // console.log(notes[key].name);
        this.setState({guessedNote: key});
        setTimeout(this.onNext, 800);
    }
}

export default App;
