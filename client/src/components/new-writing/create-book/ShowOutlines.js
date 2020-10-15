import React, { Fragment, useState} from 'react';

const ShowOutlines = ({ outlines }) => {
    var outLine = <tr><td>You have not added any settings or locations.</td></tr>;
    if (outlines && outlines.length !== 0) {
        let subject = <div></div>;
        let showPoints = <div>;</div>
        outLine = outlines.map((outline, index) => (
            <li key={index}>
                {outline.name}
                <ul>
                {subject = outline.subjects.map((subject, subIndex) => (
                    <li key={subIndex} className='ml20'>{subject.subjectName}
                    <ul>
                    {showPoints = subject.points.map((point, pointIndex) => (
                        <li key={pointIndex} className='ml40'>{point.text}</li>
                    ))}
                    </ul>
                    </li>
                ))}
                </ul>
            </li>
        ))
    } 
    return (
        <div className='container container-custom'>
            <ol>
                {outLine}
            </ol>
        </div>
    )
}

export default ShowOutlines;