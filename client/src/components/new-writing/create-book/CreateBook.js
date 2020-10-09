import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import AddCharacter from './AddCharacter';
import AddSetting from './AddSetting';
import ShowCharacters from './ShowCharacters';
import ShowSettings from './ShowSettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



const CreateBook = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        idea: "",
        title: "",
        outline: "",
        genre: "",
        characters: [],
        settings: [],
        goals: [],
        deadline:"",
        notes: [],
        chapters: [],
        content: "",
        addIdea : false,
        addTitle: false,
        addOutline: false,
        addGenre: false,
        addCharacters: false,
        addSettings: false, 
        addGoals: false, 
        addDeadline: false,
        addNotes: false, 
        addChapters: false, 
    })

    const { idea, title, outline, genre, characters, settings, goals, deadline, notes, chapters, content, addIdea, addTitle, addOutline, addGenre, addCharacters, addSettings, addGoals, addDeadline, addNotes, addChapters  } = formData;

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
    let showIdesInput, showTitleInput, showOutlineInput, showGenreInput, showCharactersInput, showSettingsInput, showGoalsInput, showDeadlinesInput, showNotesInput, showChaptersInput  = <div></div>
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
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Outline" name="outline" value={outline} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
        )
    }
    if(addGenre) {
        showGenreInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Genre" name="genre" value={genre} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
        )
    }
    if(addCharacters) {
        showCharactersInput = (
            <AddCharacter 
            createCharacter={createCharacter} 
            />
            // <Fragment>
            //     <div className="form-group form-group-alt">
            //         <input type="text" placeholder="Characters" name="characters" value={characters} onChange={e => onChange(e)}  />
            //     </div>
            // </Fragment>
        )
    }
    if(addSettings) {
        showSettingsInput = (
            <AddSetting
            createSetting={createSetting} 
            />
        )
    }
    if(addGoals) {
        showGoalsInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Goals" name="goals" value={goals} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
        )
    }
    if(addDeadline) {
        showDeadlinesInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Deadlines" name="deadline" value={deadline} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
        )
    }
    if(addNotes) {
        showNotesInput = (
            <Fragment>
                <div className="form-group form-group-alt">
                    <input type="text" placeholder="Notes" name="notes" value={notes} onChange={e => onChange(e)}  />
                </div>
            </Fragment>
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
                    <label htmlFor="addTitle" className="form-check-label">Add Title</label>
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
                    <label htmlFor="addOutline" className="form-check-label">Add Outline</label>
                </div>
                {showOutlineInput}
                <div className="col-6 col-sm-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="addGenre"
                        value={addGenre}
                        checked={addGenre}
                        onChange={e => onChangeAdd(e)}
                        id="addGenre"
                    />
                    <label htmlFor="addGenre" className="form-check-label">Add Genre</label>
                </div>
                {showGenreInput}
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
                <div className="col-6 col-sm-3 form-check">
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
                </div> 
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
                <input type="submit" className="btn btn-primary" value="CreateBook" />
                </form>
        </Fragment>
    )
}

CreateBook.propTypes = {

}

export default CreateBook

