import Note from "./Note";

const NoteList = ({ notes, removeNote }) => {
    return notes.length > 0 ? (
        <div className="note-list">
            <ul>
                {notes.map(note => {
                    return (
                        <Note note={note} key={note.id} removeNote={removeNote} />
                    )
                })
                }
            </ul>
        </div>
    ) : (
        <div className="empty">Henüz bir not eklemediniz.</div>
    )
}

export default NoteList;