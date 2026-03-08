import React, { useContext, useEffect, useRef, useState } from 'react'
import { NotesContext } from '../context/NotesContext';

const AddNotes = () => {
    const [para, setPara] = useState("");
    const paraRef = useRef(null);
    const {addNote} = useContext(NotesContext);

    useEffect(() => {
        paraRef.current.focus();
    }, []);

  return (
    <>
    <div className='addNotes'>
        <h1>Add Notes</h1>
        <div>
            <input type="text" 
            placeholder='Enter here'
            value={para}
            onChange={(e) => setPara(e.target.value)}
            ref={paraRef}/>
        </div>
        <button 
            style={{backgroundColor:'#00bfff'}}
            onClick={() => {
                if(para.trim() === "") return;
                addNote(para);
                setPara('');
                paraRef.current.focus();
            }}
        >Add note</button>
    </div>
        
    </>
  )
}

export default AddNotes