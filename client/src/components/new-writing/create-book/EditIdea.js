import React, { Fragment, useState} from 'react';

const EditIdea = ({ editIdeas, ideaToEdite, editIndex  }) => {

    const [formData, setFormData] = useState ({
        idea: ideaToEdite,
    })
    const { idea } = formData;
    const onSubmitIdea = async e => {
        e.preventDefault();
        if(idea == "" ) {
            alert ('Idea/Theme is required.')
            return false;
        }
        editIdeas(formData, editIndex);
        setFormData({
            idea: "",
        });
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });


    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Edit Idea/Theme</h5>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Idea/Theme" name="idea" value={idea} onChange={e => onChange(e)} required />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Update Idea" onClick={e => onSubmitIdea(e)}/>
                </div>
        </div>
    )
}

export default EditIdea;