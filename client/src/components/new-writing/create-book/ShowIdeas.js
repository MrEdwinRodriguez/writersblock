import React, { Fragment, useState} from 'react';

const ShowIdeas = ({ ideas }) => {
    var ideaList = <tr><td>You have not added any Ideas or Themes.</td></tr>;
    if (ideas && ideas.length !== 0) {
        ideaList = ideas.map((idea, index) => (
            <li key={index}>{idea.idea}</li>
        ))
    } 
    return (
        <div className='container container-custom'>
            <div className='table-responsive'>
                <ol>
                    {ideaList}
                </ol>
            </div>
        </div>
    )
}

export default ShowIdeas;