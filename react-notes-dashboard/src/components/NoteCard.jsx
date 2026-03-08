import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

const NoteCard = ({n}) => {

    const {deleteNote} = useContext(NotesContext);

  return (
    <>
        <div className='noteCard'>
            <p>{n.note}</p>

            <button
            style={{backgroundColor:'#ff4800'}}
            onClick={() => {
                deleteNote(n.id)
            }}>
                Delete
            </button>
        </div>
    </>
  )
}

export default NoteCard