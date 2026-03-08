import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import NoteCard from './NoteCard';

const NotesList = () => {

    const {notes} = useContext(NotesContext);

  return (
    <>
        <div className='notesList'>
            <ul>
                {notes.map(n => (
                    <NoteCard key={n.id} n={n}/>
                ))}
            </ul>
        </div>
    </>
  )
}

export default NotesList