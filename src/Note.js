import React, {Component} from 'react';
import {notes,C0,C1,C2,C3,C4,C5,C6,C7,C8} from "./constants";
import clef from './asssets/clef.svg';
import bassClef from './asssets/bass-clef.svg';
import staff from './asssets/blank-music-staff.svg';
// import staffJpg from './asssets/music-staff.jpg';
const offsets={
        [C0]:-1200,
        [C1]:-900,
        [C2]:-600,
        [C3]:-300,
        [C4]:0,
        [C5]:300,
        [C6]:600,
        [C7]:900,
        [C8]:1200,
    };
class Note extends Component {
    // state={
    //     ctx:null
    // };

    offset=(note)=>{
        //get octave
        const octave=Math.floor(note-(note%12));
            return offsets[octave]+this.noteOffset(note-octave);

    };

    noteOffset=()=> {
        return 0;
    };

    render() {
        const {note} = this.props;
        // const offset= -((note-60)*56);
        const offset= this.offset(note);


        return (
            <div className='staffs'>
                <div className='bg' />
                <span style={{position:'absolute',left:'50%'}}> {note !== null && notes[note].name}</span>
                <div className='staff staff-treble'>
                    <img className='head clef' src={clef}/>
                    <img className='lines' src={staff}/>
                </div>
                <div className="staff staff-bass">
                    <img className='head bassClef' src={bassClef}/>
                    <img className='lines' src={staff}/>
                </div>
                <div className={`note note-${note}`} style={{transform:`translate(0,${offset}%)`}}></div>
            </div>);
    }


    // componentDidMount(){
    //     this.setState({ctx:this.canvas.getDrawingContext})
    // }
    drawBars = {}
}


export default Note;
