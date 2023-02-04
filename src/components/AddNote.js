import { useContext, useState } from "react";
import { NotesContext } from "../contexts/notesContext";

const AddNote = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { dispatch, notes } = useContext(NotesContext);

    //Bu sorunu çözmek için, id'yi belirlemek için kullanılan kodu güncelleyebilirsiniz. Örneğin, id'yi notes dizisi içindeki en yüksek id değerinden bir daha büyük olarak belirleyebilirsiniz. Kodun güncellenmiş hali aşağıdaki gibidir:
    const handleSubmit = (e) => {
        e.preventDefault();
        const maxId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0;
        dispatch({
            type: "ADD_NOTE",
            id: maxId + 1,
            title: title,
            description: description
        });
        setTitle("");
        setDescription("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
            <input type="submit" value="Add Note" />
        </form>
    )
}

export default AddNote;