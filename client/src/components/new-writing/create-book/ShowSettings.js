import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ShowSettings = ({ settings }) => {
    var settingList = <tr><td>You have not added any settings or locations.</td></tr>;
    if (settings && settings.length !== 0) {
        settingList = settings.map((setting, index) => (
            <tr key={index}>
                <td width="30%">{setting.location.length > 1800 ? setting.location.slice(0, 180) + "..." : setting.location}</td>
                <td width="40%">{setting.description.length > 180 ? setting.description.slice(0, 180)+".....": setting.description}</td>
                <td width="30%">{setting.timeFrame.length > 180 ? setting.timeFrame.slice(0, 180)+"....." : setting.timeFrame}</td>
            </tr>

        ))
    } 
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
            <table className='table'>
                <thead>
                    <tr>
                        <th width="30%">Location</th>
                        <th width="40%">Description</th>
                        <th width="30%">TimeFrame</th>
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