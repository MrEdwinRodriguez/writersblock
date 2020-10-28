import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditSetting = ({ editSettingFunc, settingToEdit, editIndex }) => {

    const [formData, setFormData] = useState ({
        location: settingToEdit.location,
        description: settingToEdit.description, 
        timeFrame: settingToEdit.timeFrame,
    })
    const { location, description, timeFrame} = formData;

    const onSubmitSetting = async e => {
        e.preventDefault();
        if(location == "" && description == "" ) {
            alert ('Location or description is required to create a setting.')
            return false;
        }
        editSettingFunc(formData, editIndex);
        setFormData({
            location: "",
            description: "", 
            timeFrame: "",
        });
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });


    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Add Setting</h5>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)} required />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Description" name="description" value={description} onChange={e => onChange(e)}  />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Time Frame" name="timeFrame" value={timeFrame} onChange={e => onChange(e)}  />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Edit Setting" onClick={e => onSubmitSetting(e)}/>
                </div>
        </div>
    )
}

export default EditSetting;