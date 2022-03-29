import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import NoteList from "./components/NoteList";
import "./App.css";

const App = () => {
    // State variables
    // Current ID
    const [currentId, setCurrentId] = useState(0);
    // A list of already created notes
    const [notes, setNotes] = useState([]);
    // The note the user is currently creating in the input
    const [currentNote, setCurrentNote] = useState({ id: currentId, text: "" });

    // 1. Use useEffect to do something only once, when the app first renders
    // Like "componentDidMount" in a class-based component
    useEffect(() => {
        alert("Welcome to the Notes app");
    }, [])

    // 2A. Use useEffect to do something EVERY time the App component renders
    // Like "componentDidUpdate" in a class-based component
    useEffect(() => {
        console.log(`The current value of currentNote.text: ${currentNote.text}`)
    })

    // 2B. Use useEffect to do something ONLY when a specific state variable (currentId) is updated:
    useEffect(() => {
        console.log("LOOK! CURRENTID CHANGED SO USEFFECT 2B WAS CALLED!")
    }, [currentId])


    // A function to update the current note the user is making
    const updateCurrentNote = event => {
        setCurrentNote({ id: currentId, text: event.target.value })
    }

    // A function to add a note to the list of notes:
    // 1. Add the currentNote to the notes array
    // 2. Update currentId by 1
    // 3. Reset the currentNote, ready for the user to create a new note
    const createNote = () => {
        // 1.
        setNotes([...notes, currentNote]);
        // 2
        setCurrentId(currentId + 1);
        // 3
        setCurrentNote({ id: currentId, text: "" });
    }

    // A function to delete a note when its "X" span is clicked
    const deleteNote = deletedId => {
        // Take the "notes" array
        // Update its value to include all note objects EXCEPT the one we clicked on
        setNotes(notes.filter(obj => obj.id !== deletedId));
    }

    return (
        <>
            <h1>My Notes</h1>
            <input onChange={updateCurrentNote} value={currentNote.text} />

            <Button update={createNote} />

            <NoteList data={notes} delete1={deleteNote} />
        </>
    );
}

export default App;