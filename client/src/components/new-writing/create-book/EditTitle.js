import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditTitle = ({ editTitleFunc, existingTitle }) => {

    const [formData, setFormData] = useState ({
        title: existingTitle,
    })
    const { title } = formData;

    const onSubmitTitle = async e => {
        e.preventDefault();
        if(title == ""  ) {
            alert ('Title is required.')
            return false;
        }
        editTitleFunc(title);
        setFormData({
            title: "",
        });
    }
    const onChange = e => {
        console.log(e.target.value)
        setFormData({...formData, title: e.target.value });

    }


    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Edit Title</h5>
            <span className='small '>This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Title" name="title" value={title} onChange={e => onChange(e)} required />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Edit Title" onClick={e => onSubmitTitle(e)}/>
                </div>
        </div>
    )
}

export default EditTitle;