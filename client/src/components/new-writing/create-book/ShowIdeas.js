import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const ShowIdeas = ({ ideas, editSection }) => {
    const [formData, setFormData] = useState({
        ideas: ideas, 
    })

    var ideaList = <tr><td>You have not added any Ideas or Themes.</td></tr>;
    if (ideas && ideas.length !== 0) {
        ideaList = ideas.map((idea, index) => (
            <Fragment key={index}>
            <li>
            <button className='mr20 ml20 btn-link-transparent' name={index} onClick={(e) => editIdea(e)}><FontAwesomeIcon icon={faEdit} /></button>
            <button className='mr20 btn-link-transparent' name={index} onClick={(e) => deleteIdea(e)}><FontAwesomeIcon icon={faTrash} /></button>
            {idea}
            </li>
            </Fragment>
        ))
    } 
    
    const editIdea = (e) => {
        editSection("Idea", e.currentTarget.name)
    }
    const deleteIdea = (e) => {
        const deleteIndex = e.currentTarget.name;
        ideas.splice(parseInt(deleteIndex), 1);
        setFormData({...formData, [ideas]: ideas })
    }
    return (
        <div className='container container-custom'>
            <div className='table-responsive mb20'>
            <h5 className='planningSection'><strong>Ideas</strong></h5>
                <ol>
                    {ideaList}
                </ol>
            </div>
        </div>
    )
}

export default ShowIdeas;