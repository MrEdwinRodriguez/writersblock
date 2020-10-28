import React, { Fragment, useState} from 'react';

const AddDeadline = ({ createDeadline }) => {
    const [formData, setFormData] = useState ({
        isHardDeadline: false,
        date: "",
        description: ""
    })
    const { isHardDeadline, date, description} = formData;

    const onSubmitDeadline = async e => {
        e.preventDefault();
        if(date == "" ) {
            alert ('A date is required to create a deadline.')
            return false;
        }
        if(description == "" ) {
            alert ('A description is required to create a deadline.')
            return false;
        }
        createDeadline(formData);
        setFormData({
            isHardDeadline: false,
            date: "",
            description: ""
        });
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onCheck = e => { 
        setFormData({...formData, [e.target.name]: e.target.value == "false" ? true : false });
    }

    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Add Deadlines</h5>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input 
                            type="date" 
                            placeholder="Deadline Date" 
                            name="date" 
                            value={date} 
                            onChange={e => onChange(e)} 
                            required />
                    </div>
                    <div className="form-group form-group-alt">
                        <input 
                            type="text" 
                            placeholder="Description" 
                            name="description" 
                            value={description} 
                            onChange={e => onChange(e)}  />
                    </div>
                    <div className="form-check form-group-alt">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="isHardDeadline"
                            value={isHardDeadline}
                            checked={isHardDeadline}
                            onChange={e => onCheck(e)}
                        />
                        <label htmlFor="hardDeadline" className="form-check-label">Is this a hard deadline? </label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Create Deadline" onClick={e => onSubmitDeadline(e)}/>
                </div>
        </div>
    )
}

export default AddDeadline;