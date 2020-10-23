import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ShowCharacters = ({ characters }) => {
    var characterList = <tr><td>You have not added a business</td></tr>;
    if (characters && characters.length !== 0 && Array.isArray(characters)) {
        console.log(characters)
        characterList = characters.map((character, index) => (
            <tr key={index}>
                <td width="15%">{character.name}</td>
                <td width="10%">{character.age}</td>
                <td width="15%">{character.hometown}</td>
                <td width="20%">{character.appearance.length > 90 ? character.appearance.slice(0, 90) + "..." : character.appearance}</td>
                <td width="20%">{character.personality.length > 90 ? character.personality.slice(0, 90)+".....": character.personality}</td>
                <td width="20%">{character.characterNotes.length > 90 ? character.characterNotes.slice(0, 90)+"....." : character.characterNotes}</td>
            </tr>

        ))
    } 
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <h5 className='planningSection'><stong>Characters</stong></h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="15%">Name</th>
                        <th width="10%">Age</th>
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