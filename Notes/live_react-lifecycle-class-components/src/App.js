import React from "react";
import Button from "./components/Button";
import NoteList from "./components/NoteList";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();

        this.updateCurrentNote = this.updateCurrentNote.bind(this);
        this.createNote = this.createNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);

        this.state = {
            currentId: 0,
            notes: [],
            currentNote: { id: 0, text: "" }
        };
    }

    // This method will be executed as soon as <App /> is added to the DOM
    componentDidMount() {
        console.log("Hello componentDidMount!");
    }

    // This method will be executed as soon as <App /> is re-rendered after an update
    componentDidUpdate(prevProps, prevState) {
        console.log(`this.state.currentNote.text = ${this.state.currentNote.text}`);
        console.log(`The previous version of the above = ${prevState.currentNote.text}`);
    }

    // A method to update the current note as the user types into the input
    updateCurrentNote(event) {
        // Update state
        this.setState({
            currentNote: {
                id: this.state.currentId,
                text: event.target.value
            }
        })
    }

    // A method to add a new note when the user clicks the button
    createNote() {
        let newId = this.state.currentId + 1;
        
        // Update state
        this.setState({
            // 1. Add the new note to the "notes" array
            notes: [...this.state.notes, this.state.currentNote],
            // 2. Update the currentId property by 1
            currentId: newId,
            // 3. Reset the currentNote property, ready for the user to start creating a new note
            currentNote: { 
                id: newId,
                text: ""
            }
        })
    }

    // A method to delete a note
    deleteNote(deletedId) {
        // Update state
        this.setState({
            notes: this.state.notes.filter(obj => obj.id !== deletedId)
        })
    }
    
    render() {
        return (
            <>
                <h1>My Notes</h1>
                <input onChange={this.updateCurrentNote} value={this.state.currentNote.text} />

                <Button update={this.createNote} />

                <NoteList data={this.state.notes} delete1={this.deleteNote} />
            </>
        )
    }
}

export default App;