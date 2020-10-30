import React, { Fragment, useState} from 'react';

const EditNote = ({ editNoteFunc, noteToEdit, editIndex }) => {
    const [formData, setFormData] = useState ({
        note: noteToEdit.note,
        reference: noteToEdit.reference, 
    })
    const { note, reference } = formData;
    const onSubmitNotes = async e => {
        e.preventDefault();
        if(note == "") {
            alert ('Note is required to add notes.')
            return false;
        }
        editNoteFunc(formData, editIndex);
        setFormData({
            note: "",
            reference: "", 
        });
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Edit Note</h5>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Note" name="note" value={note} onChange={e => onChange(e)} required />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Reference" name="reference" value={reference} onChange={e => onChange(e)}  />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Edit Note" onClick={e => onSubmitNotes(e)}/>
                </div>
        </div>
    )
}

export default EditNote;