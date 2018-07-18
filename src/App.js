import React, {Component} from 'react';
import Sheet from "./Sheet";
import Keys from "./Keys";
import {C1, C2, C3, C4, C5, C6, notes} from "./constants";
import Solve from "./Solve";
import Settings from "./Settings";
import Feedback from "./Feedback";

export const sleep = ms => new Promise(res => setTimeout(res, ms));
const flatten = (arr) => arr.reduce((flat, next) => flat.concat(next), []);

export const gameStates = {
    init: 'init',
    playing: 'playing',
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
        automatic:true
    };

    async showOff() {
        for (const note of this.noteRange()) {
            this.setState({guessedNote: note, note: note});
            await sleep(10);
        }
        this.setState({guessedNote: null, note: null});
        await sleep(200);
    }
    onToggleAutomatic = () => {
          this.setState(prevState => ({automatic: !prevState.automatic}));
    };

    onSetStart = (note) => {
        this.setState({startC: note});
        this.init()

    };
    onSetRange = (val) => {
        this.setState({octaveCount: val});
        this.init()
    };
    onToggleShowKeyName = () => {
        this.setState(prevState => ({showKeyName: !prevState.showKeyName}));
    };
    init(){
        this.showOff().then(this.initQuestion);
    }

    componentDidMount() {
        this.init();
    }

    noteRange() {
        const {octaveCount, startC} = this.state;
        const allNotes= flatten([...Array(octaveCount)].map((_, octaveIndex) => [...Array(12)].map((_, keyIndex) => octaveIndex * 12 + keyIndex + startC)));
        allNotes.push(allNotes[allNotes.length-1]+1);
        return allNotes;
    }

    onClick = () => {
        if (this.state.gameState === gameStates.waiting) {
            this.proceed()
        }
    };

    render() {
        const {guessedNote, note,gameState} = this.state;
        return (
            <div className="app" onClick={this.onClick}>
                <div className="title"><h4>Rate die Note</h4></div>
                <div className="upper">
                    <Settings {...this.state}
                              onSetStart={this.onSetStart}
                              onToggleShowKeyName={this.onToggleShowKeyName}
                              onSetRange={this.onSetRange}
                              onToggleAutomatic={this.onToggleAutomatic}
                    />
                    <Sheet
                        {...{note, guessedNote, gameState}}
                    />
                    <Feedback {...this.state} />
                </div>
                <Keys {...this.state}
                    keyRange={this.noteRange()}
                      onGuess={this.onGuess}
                />
                {this.state.gameState===gameStates.waiting && <div className={'solutionWrapper'}><Solve guessedNote={guessedNote} note={note}/></div>}
            </div>
        );
    }

    // guessed = () => {if(this.state.gameState===gameStates.waiting){debugger;}const guessed =  (this.state.guessedNote && (this.state.gameState === gameStates.waiting));console.log('guessed: '+guessed);return guessed;};
    initQuestion = () => {
        console.log('new question');
        const {startC, octaveCount} = this.state;
        const note = Math.floor(Math.random() * octaveCount * 12) + startC;

        this.setState({
            note: note,
            guessedNote: null,
            guessReact: null,
            gameState: gameStates.playing
        })

    };
    onGuess = (key) => {
        console.log('guessing');
        this.setState({guessedNote: key,gameState:gameStates.waiting});
        if(this.state.automatic){setTimeout(this.proceed,900)}
    };

    proceed=()=> {
        const {gameState} = this.state;
        console.log('proceeding');
        switch (gameState) {
            case gameStates.waiting:
                this.initQuestion();
                return;
            default:
                return;

        }
    }
}

export default App;
