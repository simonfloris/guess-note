import React, {Component} from 'react';
import Sheet from "./Sheet";
import Keys from "./Keys";
import {C1, C2, C3, C4, C5, C6, noteModifiers, notes} from "./constants";
import Solve from "./Solve";
import Settings from "./Settings";
import Board from "./Board";

export const sleep = ms => new Promise(res => setTimeout(res, ms));
const flatten = (arr) => arr.reduce((flat, next) => flat.concat(next), []);

function randomModifier() {
    const coin = Math.floor(Math.random() + 0.5);
    return coin ? noteModifiers.sharp : noteModifiers.flat;
}

export const gameStates = {
    init: 'init',
    playing: 'playing',
    showResult: 'showResult',
    waiting: 'waiting',
};

class App extends Component {
    state = {
        guessedNote: null,
        note: null,
        startC: C2,
        octaveCount: 4,
        showKeyName: false,
        gameState: gameStates.init,
        automatic: true,
        maxTries: 1,
        tries: 0,
        score: 0,
        noteModifier: noteModifiers.sharp,
    };

    async showOff() {
        for (const note of this.noteRange()) {
            this.setState({guessedNote: note, note: note});
            await sleep(10);
        }
        await sleep(200);
    }

    onSetMaxTries = (val) => {
        this.setState({maxTries: val})
    };

    onToggleAutomatic = () => {
        this.setState(prevState => ({automatic: !prevState.automatic}));
    };

    onSetStart = (note) => {
        this.setState({startC: note, gameState: gameStates.init});

    };
    onSetRange = (val) => {
        this.setState({octaveCount: val, gameState: gameStates.init});
    };
    onToggleShowKeyName = () => {
        this.setState(prevState => ({showKeyName: !prevState.showKeyName}));
    };

    init() {
        this.showOff().then(this.initQuestion);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.gameState
            && this.state.gameState !== prevState.gameState
            && this.state.gameState === gameStates.init) {
            console.log('init');
            this.init();
        }
        else if (this.state.tries !== prevState.tries
            && this.state.gameState === gameStates.waiting) {
            this.checkGuess();
        }
    }

    onGuess = (key) => {
        if (this.state.gameState === gameStates.playing) {
            this.setState((prevState) => ({
                guessedNote: key,
                tries: prevState.tries + 1,
                gameState: gameStates.waiting
            }));
        }
    };

    checkGuess = () => {
        //score
        if (this.state.guessedNote === this.state.note) {
            this.setState((prevState) => ({score: prevState.score + 1, gameState: gameStates.showResult}));
            if (this.state.automatic) {
                setTimeout(this.proceed, 900)
            }
        }
        //fail
        else if (this.state.maxTries && (this.state.tries >= this.state.maxTries)) {
            this.setState({gameState: gameStates.showResult});
            if (this.state.automatic) {
                setTimeout(this.proceed, 900)
            }
        }
        //retry in update
        else {
            this.setState({gameState: gameStates.playing})
        }
    };

    componentDidMount() {
        this.init();
    }

    noteRange() {
        const {octaveCount, startC} = this.state;
        const allNotes = flatten([...Array(octaveCount)].map((_, octaveIndex) => [...Array(12)].map((_, keyIndex) => octaveIndex * 12 + keyIndex + startC)));
        allNotes.push(allNotes[allNotes.length - 1] + 1);
        return allNotes;
    }

    onClick = () => {
        if (this.state.gameState === gameStates.waiting || this.state.gameState === gameStates.showResult) {
            this.proceed()
        }
    };

    render() {
        const {guessedNote, note, gameState, noteModifier, showKeyName} = this.state;
        return (
            <div className="app" onClick={this.onClick}>

                <div className="upper">
                    <Settings {...this.state}
                              onSetStart={this.onSetStart}
                              onToggleShowKeyName={this.onToggleShowKeyName}
                              onSetRange={this.onSetRange}
                              onToggleAutomatic={this.onToggleAutomatic}
                              onSetTries={this.onSetMaxTries}
                    />
                    <Sheet
                        {...{note, guessedNote, gameState, noteModifier}}
                    />
                    <Board {...this.state} />
                    {this.state.gameState === gameStates.showResult &&
                    <div className={'solutionWrapper'}><Solve guessedNote={guessedNote} note={note}/></div>
                    }
                </div>
                <Keys showKeyName={showKeyName}
                      note={note}
                      guessedNote={guessedNote}
                      gameState={gameState}
                      keyRange={this.noteRange()}
                      onGuess={this.onGuess}

                />
            </div>);
    }

    initQuestion = () => {
        const {startC, octaveCount} = this.state;
        const note = Math.floor(Math.random() * octaveCount * 12) + startC;
        this.setState({
            note: note,
            guessedNote: null,
            guessReact: null,
            tries: 0,
            gameState: gameStates.playing,
            noteModifier: randomModifier()
        })

    };


    proceed = () => {
        const {gameState} = this.state;
        switch (gameState) {
            case gameStates.init:
                this.setState({gameState: gameStates.playing});
                return;
            case gameStates.showResult:
                this.initQuestion();
                return;

            default:
                return;

        }
    }
}

export default App;
