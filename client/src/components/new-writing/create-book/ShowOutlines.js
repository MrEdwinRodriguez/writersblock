import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const ShowOutlines = ({ outlines, editSection }) => {
    const [formData, setFormData] = useState({
        outlines: outlines, 
    })

    var outLine = <tr><td>You have not added any outline sections.</td></tr>;
    if (outlines && outlines.length !== 0) {
        let subject = <div></div>;
        let showPoints = <div>;</div>
        outLine = outlines.map((outline, index) => (
            <li key={index}>
                <button className='mr20 ml20 btn-link-transparent' name={index} onClick={(e) => editOutline(e)}><FontAwesomeIcon icon={faEdit} name={index} /></button>
                <button className='mr20 btn-link-transparent' name={index} onClick={(e) => deleteOutline(e)}><FontAwesomeIcon icon={faTrash} /></button>
                {outline.name}
                <ol className='list-alpha'>
                {subject = outline.subjects.map((subject, subIndex) => (
                    <li key={subIndex} className='ml20'>{subject.subjectName}
                    <ol className='list-disc'>
                    {showPoints = subject.points.map((point, pointIndex) => (
                        <li key={pointIndex} className='ml40'>{point.text}</li>
                    ))}
                    </ol>
                    </li>
                ))}
                </ol>
            </li>
        ))
    } 
    const editOutline = (e) => {
        console.log(e.currentTarget.name)
        editSection("Outline", e.currentTarget.name)
    }
    const deleteOutline = (e) => {
        const deleteIndex = e.currentTarget.name;
        outlines.splice(parseInt(deleteIndex), 1);
        setFormData({...formData, [outlines]: outlines })
    }
    return (
        <div className='container container-custom'>
        <h5 className='planningSection mb20'><stong>Outline</stong></h5>
            <ol>
                {outLine}
            </ol>
        </div>
    )
}

export default ShowOutlines;