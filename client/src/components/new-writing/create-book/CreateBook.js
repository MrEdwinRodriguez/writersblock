import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import AddCharacter from './AddCharacter';
import AddSetting from './AddSetting';
import AddOutline from './AddOutline';
import EditOutline from './EditOutline';
import AddTitle from './AddTitle';
import AddIdea from './AddIdea';
import AddDeadline from './AddDeadline';
import AddNote from './AddNote';
import EditIdea from './EditIdea';
import ShowCharacters from './ShowCharacters';
import ShowSettings from './ShowSettings';
import ShowDeadlines from './ShowDeadlines';
import ShowOutlines from './ShowOutlines';
import ShowTitle from './ShowTitle';
import ShowIdeas from './ShowIdeas';
import ShowNotes from './ShowNotes';
import { createBook } from '../../../actions/bookActions';

const CreateBook = ({ createBook, history }) => {
    const [formData, setFormData] = useState({
        ideas: [],
        title: "",
        outlines: [],
        characters: [],
        settings: [],
        deadlines:[],
        notes: [],
        editIndex : '',
        content: "",
        addIdea : true,
        editIdea : false,
        addTitle: false,
        addOutline: false,
        editOutline: false, 
        addCharacters: false,
        addSettings: false, 
        addDeadline: false,
        addNotes: false, 
    })

    let { ideas, title, outlines, characters, settings, deadlines, notes, addIdea, addTitle, editIdea, addOutline, editOutline, addCharacters, addSettings, addDeadline, addNotes, editIndex  } = formData;

    const onCLickAdd = e => {
        let element = document.getElementsByClassName("active")
        element[0].classList.remove("active");
        e.currentTarget.className += " active";
        const boolValue = e.target.value  == "true" ? true : false;
        console.log(e.target.name, e.target.value, !boolValue)
        setFormData({...formData, addIdea: false, editIdea: false,  addTitle: false, addOutline: false, editOutline: false, addCharacters: false, addSettings: false, addDeadline: false, addNotes: false, [e.target.name]: !boolValue })
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })
    const onSubmit = async e => {
        e.preventDefault();
        console.log('creating book', formData)
        
        createBook(formData, history, false);

    }

    const createOutlineSection = (outline) =>  {
        console.log('adding outline for book', outline)
        outlines.push(outline)
        setFormData({...formData, [outlines]: outlines })

    }
    const editOutlineSection = (outline, index) =>  {
        outlines[index] = outline;
        setFormData({...formData, [outlines]: outlines, editOutline: false, addOutline: true})
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
        ideas.push(idea.idea);
        setFormData({...formData, [ideas]: ideas})
   }
   const editIdeas = (idea, index) =>  {
        ideas[index] = idea.idea;
        setFormData({...formData, [ideas]: ideas, editIdea: false, addIdea: true})
    }

    const editSection = (section, index) =>  {
        const editSection = "edit"+section;
        editIndex = index;
        setFormData({...formData, addIdea: false, editIdea: false,  addTitle: false, addOutline: false, editOutline: false,  addCharacters: false, addSettings: false, addDeadline: false, addNotes: false, editIndex: editIndex , [editSection]: true })
    }

    let showIdeasInput, showTitleInput, showOutlineInput, showCharactersInput, showSettingsInput, showDeadlinesInput, showNotesInput  = <div></div>
    if(addIdea) {
        showIdeasInput = (
            <AddIdea
            createIdea={createIdea} 
            />
        )
    } 
    if (editIdea) {
        showIdeasInput = (
            <EditIdea
            editIdeas={editIdeas} 
            ideaToEdite={ideas[editIndex]} 
            editIndex = {editIndex}
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
    if (editOutline) {
        showOutlineInput = (
            <EditOutline
            editOutlineSection={editOutlineSection} 
            outlineToEdit={outlines[editIndex]} 
            editIndex = {editIndex}
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
            <form className="form" onSubmit={e => onSubmit(e)}>
            <input type="submit" className="btn btn-primary mb10 mt10" value="Create Book" />
            </form>
          
            {title.length > 0 ?  <ShowTitle title={title} /> : ""}
            {editIdea || addIdea ?  <ShowIdeas ideas={ideas} editSection={editSection} /> : ""}
            {addOutline || editOutline ?  <ShowOutlines outlines={outlines} editSection={editSection} /> : ""}
            {characters.length > 0 ? <ShowCharacters characters={characters} editSection={editSection} /> : ""}
            {settings.length > 0 ? <ShowSettings settings={settings} editSection={editSection} /> : ""} 
            {deadlines.length > 0 ? <ShowDeadlines deadlines={deadlines} editSection={editSection} /> : ""} 
            {notes.length > 0 ? <ShowNotes notes={notes} editSection={editSection} /> : ""}
        </Fragment>
    )
}

CreateBook.propTypes = {
    createBook: PropTypes.func.isRequired,
}

export default connect(null, {createBook})(CreateBook);



