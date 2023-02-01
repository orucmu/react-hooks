import { useState } from "react";

const NoteList = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: "note 1" },
        { id: 2, title: "note 2" },
        { id: 3, title: "note 3" }
    ]);

    const addNote = () => {
        setNotes([...notes, { id: 4, title: "note 4" }])
    }
    return (
        <>
            <ul className="note-list">
                {notes.map(note => {
                    return (
                        <li key={note.id}>{note.title}</li>
                    )
                })}
            </ul>
            <button onClick={addNote}>Add Note</button>
        </>
    )
}

export default NoteList;