import React, { useEffect } from "react";

const Note = props => {
    // 3. Use useEffect to do something just before a Note is removed from the DOM
    useEffect(() => {
        return () => {
            alert(`You deleted the Note with content: ${props.content}`);
        }
    })

    const deleteItem = () => {
        props.delete2(props.id);
    }
    
    return (
        <div className="note">
            {props.content}
            <span className="delete" onClick={deleteItem}>X</span>
        </div>
    );
}

export default Note;