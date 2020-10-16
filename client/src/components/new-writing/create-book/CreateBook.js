import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import AddCharacter from './AddCharacter';
import AddSetting from './AddSetting';
import AddOutline from './AddOutline';
import AddTitle from './AddTitle';
import AddIdea from './AddIdea';
import AddDeadline from './AddDeadline';
import AddNote from './AddNote';
import ShowCharacters from './ShowCharacters';
import ShowSettings from './ShowSettings';
import ShowDeadlines from './ShowDeadlines';
import ShowOutlines from './ShowOutlines';
import ShowTitle from './ShowTitle';
import ShowIdeas from './ShowIdeas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ShowNotes from './ShowNotes';



const CreateBook = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        ideas: [],
        title: "",
        outlines: [],
        characters: [],
        settings: [],
        goals: [],
        deadlines:[],
        notes: [],
        content: "",
        addIdea : true,
        addTitle: false,
        addOutline: false,
        addCharacters: false,
        addSettings: false, 
        addDeadline: false,
        addNotes: false, 
    })

    let { ideas, title, outlines, characters, settings, goals, deadlines, notes, addIdea, addTitle, addOutline, addCharacters, addSettings, addDeadline, addNotes  } = formData;

    const onCLickAdd = e => {
        const boolValue = e.target.value  == "true" ? true : false;
        console.log(e.target.name, e.target.value, !boolValue)
        setFormData({...formData, addIdea: false, addTitle: false, addOutline: false, addCharacters: false, addSettings: false, addDeadline: false, addNotes: false, [e.target.name]: !boolValue })
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault();
        console.log('submitting new book', formData)

    }
    const createOutlineSection = (outline) =>  {
        console.log('adding outline for book', outline)
        outlines.push(outline)
        setFormData({...formData, [outlines]: outlines })

    }
    const createCharacter = (character) =>  {
        console.log('adding character to book', character)
        characters.push(character)
        setFormData({...formData, [characters]: characters })
    
  }

    const createSetting = (setting) =>  {
        console.log('adding setting to book', setting)
        settings.push(setting)
        setFormData({...formData, [characters]: characters })

    }
    const createDeadline = (deadline) =>  {
        console.log('adding deadline for book', deadline)
        deadlines.push(deadline)
        setFormData({...formData, [deadlines]: deadlines })

    }
    const createNote = (note) =>  {
         notes.push(note)
        setFormData({...formData, [deadlines]: deadlines })

    }
    const createTitle = (newTitle) =>  {
        console.log('adding title to book', newTitle)
        setFormData({...formData, "title": newTitle  })
    }
    const createIdea = (idea) =>  {
        ideas.push(idea)
       setFormData({...formData, [ideas]: ideas})

   }
    let showIdeasInput, showTitleInput, showOutlineInput, showCharactersInput, showSettingsInput, showGoalsInput, showDeadlinesInput, showNotesInput = <div></div>
    if(addIdea) {
        showIdeasInput = (
            <AddIdea
            createIdea={createIdea} 
            />
        )
    }
    if(addTitle) {
        showTitleInput = (
            <AddTitle
            createTitle={createTitle} 
            />
        )
    }
    if(addOutline) {
        showOutlineInput = (
            <AddOutline
            createOutlineSection={createOutlineSection} 
            />
        )
    }
    if(addCharacters) {
        showCharactersInput = (
            <AddCharacter 
            createCharacter={createCharacter} 
            />
        )
    }
    if(addSettings) {
        showSettingsInput = (
            <AddSetting
            createSetting={createSetting} 
            />
        )
    }
    // if(addGoals) {
    //     showGoalsInput = (
    //         <addGoals
    //         createDeadline={createDeadline} 
    //         />
    //     )
    // }
    if(addDeadline) {
        showDeadlinesInput = (
            <AddDeadline
            createDeadline={createDeadline} 
            />
        )
    }
    if(addNotes) {
        showNotesInput = (
            <AddNote
            createNote={createNote} 
            />
        )
    }
    return (
        <Fragment>
            <h1 className='large text-primary '>Let Us Get Organized</h1>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" name='addIdea' value='addIdea' onClick={e => onCLickAdd(e)}>Add Ideas/Themes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name='addTitle' value='addTitle' onClick={e => onCLickAdd(e)}>Add Title</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name='addOutline' value='addOutline' onClick={e => onCLickAdd(e)}>Add Outline Sections</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name='addCharacters' value='addCharacters' onClick={e => onCLickAdd(e)}>Add Characters</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name='addSettings' value='addSettings' onClick={e => onCLickAdd(e)}>Add Settings/Locations</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name='addDeadline' value='addDeadline' onClick={e => onCLickAdd(e)}>Add Deadline(s)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" name='addNotes' value='addNotes' onClick={e => onCLickAdd(e)}>Add Notes</a>
            </li>
            </ul>
            {showIdeasInput}
            {showTitleInput}
            {showOutlineInput}
            {showCharactersInput}
            {showSettingsInput}
            {showDeadlinesInput}
            {showNotesInput}
            <button className="btn btn-primary mb10 mt10">Create Book</button>
            {title.length > 0 ?  <ShowTitle title={title} /> : ""}
            {ideas.length > 0 ?  <ShowIdeas ideas={ideas} /> : ""}
            {outlines.length > 0 ?  <ShowOutlines outlines={outlines} /> : ""}
            {characters.length > 0 ? <ShowCharacters characters={characters} /> : ""}
            {settings.length > 0 ? <ShowSettings settings={settings} /> : ""} 
            {deadlines.length > 0 ? <ShowDeadlines deadlines={deadlines} /> : ""} 
            {notes.length > 0 ? <ShowNotes notes={notes} /> : ""}
        </Fragment>
    )
}

CreateBook.propTypes = {

}

export default CreateBook

