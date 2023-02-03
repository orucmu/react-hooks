const Note = ({ note, removeNote }) => {
    return (
        <li onClick={() => removeNote(note.id)} key={note.id}>
            <h1>
                {note.title}
            </h1>
            <p>{note.description}</p>
        </li>)
}

export default Note;