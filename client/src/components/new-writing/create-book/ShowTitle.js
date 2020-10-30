import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShowTitle = ({ title, editSection }) => {
    const [formData, setFormData] = useState({
        title: title, 
    })
    const editTitle = (e) => {
console.log(e.currentTarget.getAttribute('value'))
        editSection("Title", e.currentTarget.getAttribute('value'))
    }
    const deleteTitle = (e) => {
        console.log(e)
        setFormData({...formData, [title]: "" })
    }
 
    return (
        <div className='container container-custom'>
            <div className='table-responsive mb20'>
            <h5 className='planningSection'><stong>Title</stong></h5>
            <button className='mr20 ml20 btn-link-transparent' value={title} onClick={(e) => editTitle(e)}><FontAwesomeIcon icon={faEdit} /></button>
            <button className='mr20 btn-link-transparent' onClick={(e) => deleteTitle(e)}><FontAwesomeIcon icon={faTrash} /></button>
                {title}
            </div>
        </div>
    )
}

export default ShowTitle;