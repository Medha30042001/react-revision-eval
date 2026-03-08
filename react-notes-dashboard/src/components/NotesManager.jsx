import React, { useEffect, useState } from 'react'
import { NotesContext } from '../context/NotesContext'
import AddNotes from './AddNotes'
import NotesList from './NotesList';
import NotesStats from './NotesStats';

const NotesManager = () => {

    const [notes, setNotes] = useState([
        {id : 1, note : 'Hooks can only be called inside React function components.'},
        {id : 2, note : 'Hooks can only be called at the top level of a component.'},
        {id : 3, note : 'Hooks cannot be conditional'}
    ]);

    const addNote = (para) => {
        setNotes(prev => [
            ...prev,
            {id:Date.now(), note: para}
        ])
    }

    const deleteNote = (id) => {
        setNotes(prev => prev.filter(note => note.id !== id));
    }

    useEffect(() => {
        console.log('Notes fetched');
        setNotes(JSON.parse(localStorage.getItem('notes')));
    }, []);

    useEffect(() => {
        console.log('Notes updated');
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

  return (
    <NotesContext.Provider value={{notes, addNote, deleteNote}}>
        <AddNotes />
        <NotesList />
        <NotesStats />
    </NotesContext.Provider>
  )
}

export default NotesManager