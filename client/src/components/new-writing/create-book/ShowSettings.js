import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShowSettings = ({ settings, editSection }) => {
    const [formData, setFormData] = useState({
        settings: settings, 
    })
    var settingList = <tr><td>You have not added any settings or locations.</td></tr>;
    if (settings && settings.length !== 0) {
        settingList = settings.map((setting, index) => (
            <tr key={index}>
                <td width="25%">{setting.location.length > 1800 ? setting.location.slice(0, 180) + "..." : setting.location}</td>
                <td width="40%">{setting.description.length > 180 ? setting.description.slice(0, 180)+".....": setting.description}</td>
                <td width="25%">{setting.timeFrame.length > 180 ? setting.timeFrame.slice(0, 180)+"....." : setting.timeFrame}</td>
                <td width="5%"><FontAwesomeIcon icon={faEdit} name={index} onClick={(e) => editSetting(e)} /></td>
                <td width="5%"><FontAwesomeIcon icon={faTrash} name={index} onClick={(e) => deleteCharacter(e)} /></td>
            </tr>

        ))
    } 
    const editSetting = (e) => {
        editSection("Setting", e.currentTarget.getAttribute('name'))
    }
    const deleteCharacter = (e) => {
        const deleteIndex = e.currentTarget.getAttribute('name');
        settings.splice(parseInt(deleteIndex), 1);
        setFormData({...formData, [settings]: settings })
    }
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <h5 className='planningSection'><stong>Settings/Locations</stong></h5>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="25%">Location</th>
                        <th width="40%">Description</th>
                        <th width="25%">TimeFrame</th>
                    </tr>
                </thead>
                <tbody>
                    {settingList}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ShowSettings;