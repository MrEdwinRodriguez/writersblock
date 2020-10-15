import React, { Fragment, useState} from 'react';

const ShowNotes = ({ notes }) => {
    var notesList = <tr><td>You have not added any notes.</td></tr>;
    if (notes && notes.length !== 0) {
        notesList = notes.map((notes, index) => (
            <tr key={index}>
                <td width="50%">{notes.note.length > 1800 ? notes.note.slice(0, 180) + "..." : notes.note}</td>
                <td width="50%">{notes.reference.length > 180 ? notes.reference.slice(0, 180)+".....": notes.reference}</td>
            </tr>

        ))
    } 
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="50%">Note</th>
                        <th width="50%">Reference</th>
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