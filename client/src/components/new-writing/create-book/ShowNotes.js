import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShowNotes = ({ notes, editSection }) => {
    const [formData, setFormData] = useState({
        notes: notes, 
    })
    var notesList = <tr><td>You have not added any notes.</td></tr>;
    if (notes && notes.length !== 0) {
        notesList = notes.map((notes, index) => (
            <tr key={index}>
                <td width="45%">{notes.note.length > 1800 ? notes.note.slice(0, 180) + "..." : notes.note}</td>
                <td width="45%">{notes.reference.length > 180 ? notes.reference.slice(0, 180)+".....": notes.reference}</td>
                <td width="5%"><FontAwesomeIcon icon={faEdit} name={index} onClick={(e) => editNote(e)} /></td>
                <td width="5%"><FontAwesomeIcon icon={faTrash} name={index} onClick={(e) => deleteNote(e)} /></td>
            </tr>

        ))
    } 
    const editNote = (e) => {
        console.log(e.currentTarget.getAttribute('name'))
        editSection("Note", e.currentTarget.getAttribute('name'))
    }
    const deleteNote = (e) => {
        const deleteIndex = e.currentTarget.getAttribute('name');
        notes.splice(parseInt(deleteIndex), 1);
        setFormData({...formData, [notes]: notes })
    }
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <h5 className='planningSection'><stong>Notes</stong></h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="45%">Note</th>
                        <th width="45%">Reference</th>
                    </tr>
                </thead>
                <tbody>
                    {notesList}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ShowNotes;