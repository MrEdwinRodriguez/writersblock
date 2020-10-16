import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const AddIdea = ({ createIdea }) => {

    const [formData, setFormData] = useState ({
        idea: "",
    })
    const { idea} = formData;
    const onSubmitIdea = async e => {
        e.preventDefault();
        if(idea == "" ) {
            alert ('Idea/Theme is required.')
            return false;
        }
        createIdea(formData);
        setFormData({
            idea: "",
        });
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });


    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Add Idea/Theme</h5>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Idea/Theme" name="idea" value={idea} onChange={e => onChange(e)} required />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Create Idea" onClick={e => onSubmitIdea(e)}/>
                </div>
        </div>
    )
}

export default AddIdea;