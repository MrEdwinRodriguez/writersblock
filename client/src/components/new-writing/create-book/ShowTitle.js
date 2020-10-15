import React, { Fragment, useState} from 'react';

const ShowTitle = ({ title }) => {
    // var settingList = <tr><td>You have not added any settings or locations.</td></tr>;
 
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
                {title}
            </div>
        </div>
    )
}

export default ShowTitle;