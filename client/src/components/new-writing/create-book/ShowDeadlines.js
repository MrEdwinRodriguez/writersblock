import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShowDeadlines = ({ deadlines, editSection }) => {
    const [formData, setFormData] = useState({
        deadlines: deadlines, 
    })
    var deadlineList = <tr><td>You do not have any deadlines.</td></tr>;
    if (deadlines && deadlines.length !== 0) {
        deadlineList = deadlines.map((deadline, index) =>  (
            <tr key={index}>
                <td width="20%">{deadline.date}</td>
                <td width="55%">{deadline.description.length > 250 ? deadline.description.slice(0, 250)+".....": deadline.description}</td>
                <td width="15%">{deadline.isHardDeadline ? 'Yes' : 'No'}</td>
                <td width="5%"><FontAwesomeIcon icon={faEdit} name={index} onClick={(e) => editDeadline(e)} /></td>
                <td width="5%"><FontAwesomeIcon icon={faTrash} name={index} onClick={(e) => deleteDeadline(e)} /></td>
            </tr>

        ))
    } 
    const editDeadline = (e) => {
        console.log(e.currentTarget.getAttribute('name'))
        editSection("Deadline", e.currentTarget.getAttribute('name'))
    }
    const deleteDeadline = (e) => {
        const deleteIndex = e.currentTarget.getAttribute('name');
        deadlines.splice(parseInt(deleteIndex), 1);
        setFormData({...formData, [deadlines]: deadlines })
    }
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <h5 className='planningSection'><stong>Deadlines</stong></h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="20%">Date</th>
                        <th width="55%">Description</th>
                        <th width="15%">Hard Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {deadlineList}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ShowDeadlines;