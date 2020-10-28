import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShowDeadlines = ({ deadlines }) => {
    var deadlineList = <tr><td>You do not have any deadlines.</td></tr>;
    if (deadlines && deadlines.length !== 0) {
        deadlineList = deadlines.map((deadline, index) =>  (
            <tr key={index}>
                <td width="20%">{deadline.date}</td>
                <td width="65%">{deadline.description.length > 250 ? deadline.description.slice(0, 250)+".....": deadline.description}</td>
                <td width="15%">{deadline.isHardDeadline ? 'Yes' : 'No'}</td>
            </tr>

        ))
    } 
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <h5 className='planningSection'><stong>Deadlines</stong></h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="20%">Date</th>
                        <th width="65%">Description</th>
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