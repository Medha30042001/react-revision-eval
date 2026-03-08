import React, { useContext, useMemo } from 'react'
import { NotesContext } from '../context/NotesContext'

const NotesStats = () => {

    const {notes} = useContext(NotesContext);

    const notesCount = useMemo(() => {
        return notes.length;
    }, [notes]);

  return (
    <div className='notesStats'>
        <h3>Total number of notes</h3>
        <h1 style={{margin:0, color:'green'}}>{notesCount}</h1>
    </div>
  )
}

export default NotesStats