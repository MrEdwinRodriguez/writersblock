import React, { Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const EditOutline = ({ editOutlineSection, outlineToEdit, editIndex }) => {
    const [formData, setFormData] = useState ({
        name: outlineToEdit.name,
        subjects: outlineToEdit.subjects, 
    })
    console.log(outlineToEdit)
 
    const { name, subjects } = formData;
    const onSubmitOutlineSection = async e => {
        e.preventDefault();
        if(name == "") {
            alert ('Name is required to add an outline section.')
            return false;
        }
        editOutlineSection(formData, editIndex);
        setFormData({
            name: "",
            subjects: [
                {
                subjectName: "", points: []
                }
            ], 
        });
    }
    const onChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }
    const onChangeSubject = e => {
        const subjectIndex = e.target.name.substr(-1);
        subjects[subjectIndex].subjectName = e.target.value;
        setFormData({...formData, [subjects]: subjects });
    }
    const addSubject = () => {  
        subjects.push({
            subjectName: "",
            points: [],
        })
        setFormData({...formData, [subjects]: subjects })
    };
    const addPoint = (e) => {  
        const subjectIndex = e.target.name.substr(-1);
        let pointsArray = subjects[subjectIndex].points;
        const pointName = "sub_"+subjectIndex+"_point_"+pointsArray.length;
        pointsArray.push({ pointName: pointName, text: "" })
        subjects[subjectIndex].points = pointsArray;
        console.log(subjects[subjectIndex].points)
        setFormData({...formData, [subjects]: subjects })
    };
    const onChangePoint = e => {
        const splitName = e.target.name.split("_");
        const subjectIndex = splitName[1];
        const pointIndex = splitName[3];
        subjects[subjectIndex].points[pointIndex].text = e.target.value;
        setFormData({...formData, [subjects]: subjects });
    }

    let showSubjects = null;        
    showSubjects = subjects.map((subject, i) => (
        showSubjects = <Fragment>
            <div className="form-group form-group-alt" key={i}>
                <input type="text" key={i} field="subject" placeholder="Subject" name={"subject_"+i} value={subjects[i].subjectName}  onChange={e => onChangeSubject(e)}/>
                <button type='button' className='btn addSubject btn-link-transparent' name={'addPoint_'+i} onClick={(e) => addPoint(e)} ><FontAwesomeIcon icon={faPlus} /> Add Point to Subject</button>
            </div>
            {subject.points.map((point, index) => (
                <div className="form-group form-group-alt" key={index}>
                    <input type="text" key={index} field="point" placeholder="Point" name={"sub_"+i+'_point_'+index} value={subject.points[index].text}  onChange={e => onChangePoint(e)}/>
                </div>
            ))}
        </Fragment>
    ))

    return (
        <div className='wrapForm'>
            <h5 className='large text-primary formSection'>Edit Section </h5>
            <span className='small '>Create Section/Chapter. Remember this can be changed later.</span><br></br>
            <button type='button' className='btn btn-link-transparent' onClick={addSubject} ><FontAwesomeIcon icon={faPlus} />  Add Subject to Section</button>
                <div className="form">
                    <div className="form-group form-group-alt">
                        <input type="text" placeholder="Section/Chapter Name ex. Chapter 1, Intro" name="name" value={name} onChange={e => onChange(e)} required />
                    </div>
                    {showSubjects}
                    <input type="submit" className="btn btn-primary" value="Edit Outline Section" onClick={e => onSubmitOutlineSection(e)}/>
                </div>
        </div>
    )
}

export default EditOutline;