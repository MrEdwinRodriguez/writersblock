import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShowCharacters = ({ characters, editSection }) => {
    const [formData, setFormData] = useState({
        characters: characters, 
    })
    var characterList = <tr><td>You have not added a business</td></tr>;
    if (characters && characters.length !== 0 && Array.isArray(characters)) {
        characterList = characters.map((character, index) => (
            <tr key={index}>
                <td width="15%">{character.name}</td>
                <td width="5%">{character.age}</td>
                <td width="15%">{character.hometown}</td>
                <td width="20%">{character.appearance.length > 90 ? character.appearance.slice(0, 90) + "..." : character.appearance}</td>
                <td width="20%">{character.personality.length > 90 ? character.personality.slice(0, 90)+".....": character.personality}</td>
                <td width="20%">{character.characterNotes.length > 90 ? character.characterNotes.slice(0, 90)+"....." : character.characterNotes}</td>
                <td width="3%" ><FontAwesomeIcon icon={faEdit} name={index} onClick={(e) => editCharacter(e)} /></td>
                <td width="2%"><FontAwesomeIcon icon={faTrash} name={index} onClick={(e) => deleteCharacter(e)} /></td>
            </tr>

        ))
    } 
    const editCharacter = (e) => {
        editSection("Character", e.currentTarget.getAttribute('name'))
    }
    const deleteCharacter = (e) => {
        const deleteIndex = e.currentTarget.getAttribute('name');
        characters.splice(parseInt(deleteIndex), 1);
        setFormData({...formData, [characters]: characters })
    }
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <h5 className='planningSection'><stong>Characters</stong></h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="15%">Name</th>
                        <th width="5%">Age</th>
                        <th width="15%">Hometown</th>
                        <th width="20%">Appearance</th>
                        <th width="20%">Personality</th>
                        <th width="20%">Character Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {characterList}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ShowCharacters;