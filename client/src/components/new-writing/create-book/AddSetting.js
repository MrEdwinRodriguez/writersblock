import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const AddSetting = ({ createSetting }) => {

    const [formData, setFormData] = useState ({
        location: "",
        description: "", 
        timeFrame: "",
    })
    const { location, description, timeFrame} = formData;
    let showNameRequired = false;

    const onSubmitSetting = async e => {
        e.preventDefault();
        if(location == "" && description == "" ) {
            alert ('Location or description is required to create a setting.')
            return false;
        }
        createSetting(formData);
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
                    <input type="submit" className="btn btn-primary" value="CreateSetting" onClick={e => onSubmitSetting(e)}/>
                </div>
        </div>
    )
}

export default AddSetting;