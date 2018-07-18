import React, {Component} from 'react';
import Sheet from "./Sheet";
import Keys from "./Keys";
import {C1, C2, C3, C4, C5, C6, notes} from "./constants";
import Solve from "./Solve";
import Settings from "./Settings";
import Feedback from "./Feedback";

export const sleep = ms => new Promise(res => setTimeout(res, ms));
const flatten = (arr) => arr.reduce((flat, next) => flat.concat(next), []);

const gameStates={
    init:'init',
    playing:'playing',
};

class App extends Component {
    state = {
        guessedNote: null,
        note: null,
        startC: C2,
        octaveCount: 4,
        showKeyName: false,
        gameState:gameStates.init,
    };

    async showOff() {
        for (const note of this.noteRange()) {
            this.setState({guessedNote: note, note: note});
            await sleep(10);
        }
        await sleep(200);
    }

    componentDidMount() {
        this.showOff().then(this.initQuestion);
    }

    noteRange() {
        const {octaveCount, startC} = this.state;
        return flatten([...Array(octaveCount)].map((_, octaveIndex) => [...Array(12)].map((_, keyIndex) => octaveIndex * 12 + keyIndex + startC)));
    }

    render() {
        const {guessedNote, note, startC, octaveCount, showKeyName,gameState} = this.state;
        return (
            <div className="app">
                <div className="upper">
                <Settings {...this.state} onChange={this.onChange}/><Sheet note={note} guessedNote={guessedNote}/>
                    <Feedback {...this.state} />
                </div>
                <Keys guessedNote={guessedNote} note={note} onGuess={this.onGuess} startC={startC} status={gameState}
                      octaveCount={octaveCount} showKeyName={showKeyName}/>
                {this.guessed() && <div className={'solution'}><Solve guessedNote={guessedNote} note={note}/></div>}
            </div>
        );
    }

    guessed = () => this.state.guessedNote && this.state.gameState===gameStates.playing;

    initQuestion = () => {
        const {startC, octaveCount} = this.state;
        // const max=(octaveCount * 12)+startC;
        // const note =Math.max(((this.state.note+1)%(max)),startC);
        let note = Math.floor(Math.random() * octaveCount * 12) + startC;
        while (note > 81 || note < 40) {
            note = Math.floor(Math.random() * octaveCount * 12) + startC;
        }

        this.setState({
            note: note,
            guessedNote: null,
            guessReact: null,
            gameState:gameStates.playing
        })

    };
    onGuess = (key) => {
        // console.log(notes[key].name);
        this.setState({guessedNote: key});
        setTimeout(this.initQuestion, 800);
    }
}

export default App;
