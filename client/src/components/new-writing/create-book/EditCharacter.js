import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const EditCharacter = ({ editCharacterFunc, characterToEdit, editIndex }) => {
    console.log('line 7', editIndex)
    const [formData, setFormData] = useState ({
        name: characterToEdit.name,
        age: characterToEdit.age, 
        hometown: characterToEdit.hometown,
        appearance: characterToEdit.appearance,
        personality: characterToEdit.personality,
        characterNotes: characterToEdit.characterNotes
    })

    const { name, age, hometown, appearance, personality, characterNotes } = formData;
    let showNameRequired = false;

    const onSubmitCharacter = async e => {
        e.preventDefault();
        console.log(name, name)
        if(name == "") {
            alert ('Name is required to create a character.')
            return false;
        }
        editCharacterFunc(formData, editIndex);
        setFormData({
            name: "",
            age: "", 
            hometown: "",
            appearance: "",
            personality: "",
            characterNotes: ""
        });
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });


    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Add Character</h5>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Age" name="age" value={age} onChange={e => onChange(e)}  />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Hometown" name="hometown" value={hometown} onChange={e => onChange(e)}  />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Appearance" name="appearance" value={appearance} onChange={e => onChange(e)}  />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Personality" name="personality" value={personality} onChange={e => onChange(e)}  />
                    </div>
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Character Notes" name="characterNotes" value={characterNotes} onChange={e => onChange(e)}  />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Edit Character" onClick={e => onSubmitCharacter(e)}/>
                </div>
        </div>
    )
}

export default EditCharacter;
