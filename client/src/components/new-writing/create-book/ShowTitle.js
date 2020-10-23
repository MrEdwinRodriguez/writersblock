import React, { Fragment, useState} from 'react';

const ShowTitle = ({ title }) => {
    // var settingList = <tr><td>You have not added any settings or locations.</td></tr>;
 
    return (
        <div className='container container-custom'>
            <div className='table-responsive mb20'>
            <h5 className='planningSection'><stong>Title</stong></h5>
                <div className='center-text'>{title}</div>
            </div>
        </div>
    )
}

export default ShowTitle;