import React from "react";
import Note from "../components/Note";

const NoteItem = ({ note }) => {
    return (
        <li key={note.id}>
            <Note
                title={note.title}
                description={note.description}
                createdAt={note.createdAt}
            />
        </li>
    );
};

export default NoteItem;