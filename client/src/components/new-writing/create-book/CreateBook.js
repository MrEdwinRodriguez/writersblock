import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import AddCharacter from './AddCharacter';
import AddSetting from './AddSetting';
import AddOutline from './AddOutline';
import AddDeadline from './AddDeadline';
import AddNote from './AddNote';
import ShowCharacters from './ShowCharacters';
import ShowSettings from './ShowSettings';
import ShowDeadlines from './ShowDeadlines';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ShowNotes from './ShowNotes';



const CreateBook = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        idea: "",
        title: "",
        outlines: [],
        characters: [],
        settings: [],
        goals: [],
        deadlines:[],
        notes: [],
        chapters: [],
        content: "",
        addIdea : false,
        addTitle: false,
        addOutline: false,
        addCharacters: false,
        addSettings: false, 
        addGoals: false, 
        addDeadline: false,
        addNotes: false, 
        addChapters: false, 
    })

    const { idea, title, outlines, characters, settings, goals, deadlines, notes, chapters, content, addIdea, addTitle, addOutline, addCharacters, addSettings, addGoals, addDeadline, addNotes, addChapters  } = formData;

    const onChangeAdd = e => {
        const boolValue = e.target.value  == "true" ? true : false;
        console.log(e.target.name, e.target.value, !boolValue)
        setFormData({...formData, [e.target.name]: !boolValue })
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
    let showIdesInput, showTitleInput, showOutlineInput, showCharactersInput, showSettingsInput, showGoalsInput, showDeadlinesInput, showNotesInput, showChaptersInput  = <div></div>
    if(addIdea) {
        showIdesInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Idea/Theme" name="idea" value={idea} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
        )
    }
    if(addTitle) {
        showTitleInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Title" name="title" value={title} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
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
    if(addChapters) {
        showChaptersInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Chapters" name="chapters" value={chapters} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <h1 className='large text-primary '>Let Us Get Organized</h1>
            <span className='small '>Add as much or as little as you like. This can be updated later.</span>
                <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addIdea"
                        value={addIdea}
                        checked={addIdea}
                        onChange={e => onChangeAdd(e)}
                        id="addIdea"
                    />
                    <label htmlFor="addIdea" className="form-check-label">Add Idea/Theme</label>
                </div>
                {showIdesInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addTitle"
                        value={addTitle}
                        checked={addTitle}
                        onChange={e => onChangeAdd(e)}
                        id="addTitle"
                    />
                    <label htmlFor="addTitle" className="form-check-label">Add Title Idea</label>
                </div>
                {showTitleInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addOutline"
                        value={addOutline}
                        checked={addOutline}
                        onChange={e => onChangeAdd(e)}
                        id="addOutline"
                    />
                    <label htmlFor="addOutline" className="form-check-label">Add Outline Section</label>
                </div>
                {showOutlineInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addCharacters"
                        value={addCharacters}
                        checked={addCharacters}
                        onChange={e => onChangeAdd(e)}
                        id="addCharacters"
                    />
                    <label htmlFor="addCharacters" className="form-check-label">Add Characters</label>
                </div>
                {characters.length > 0 ? <ShowCharacters characters={characters} /> : ""}
                {showCharactersInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addSettings"
                        value={addSettings}
                        checked={addSettings}
                        onChange={e => onChangeAdd(e)}
                        id="addSettings"
                    />
                    <label htmlFor="addSettings" className="form-check-label">Add Settings/Locations</label>
                </div> 
                {settings.length > 0 ? <ShowSettings settings={settings} /> : ""}  
                {showSettingsInput}
                {/* <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addGoals"
                        value={addGoals}
                        checked={addGoals}
                        onChange={e => onChangeAdd(e)}
                        id="addGoals"
                    />
                    <label htmlFor="addGoals" className="form-check-label">Add Goals</label>
                </div>  */}
                {showGoalsInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addDeadline"
                        value={addDeadline}
                        checked={addDeadline}
                        onChange={e => onChangeAdd(e)}
                        id="addDeadline"
                    />
                    <label htmlFor="addDeadline" className="form-check-label">Add Deadline(s)</label>
                </div>
                {deadlines.length > 0 ? <ShowDeadlines deadlines={deadlines} /> : ""}  
                {showDeadlinesInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addNotes"
                        value={addNotes}
                        checked={addNotes}
                        onChange={e => onChangeAdd(e)}
                        id="addNotes"
                    />
                    <label htmlFor="addNotes" className="form-check-label">Add Notes/Research</label>
                </div>
                {notes.length > 0 ? <ShowNotes notes={notes} /> : ""}
                {showNotesInput}
                <div className="col-6 col-sm-3 form-check mb-4">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addChapters"
                        value={addChapters}
                        checked={addChapters}
                        onChange={e => onChangeAdd(e)}
                        id="addChapters"
                    />
                    <label htmlFor="addChapters" className="form-check-label">Add Chapters</label>
                </div>
                {showChaptersInput}
                <input type="submit" className="btn btn-primary" value="Create Book" />
                </form>
        </Fragment>
    )
}

CreateBook.propTypes = {

}

export default CreateBook

