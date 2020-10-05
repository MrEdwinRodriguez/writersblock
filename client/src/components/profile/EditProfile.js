import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import { FormatDate } from '../..//utils/formatHelper'


const EditProfile = ({ profile: {profile, loading }, createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState({
        dob: "",
        bio: "",
        favoriteGenre: "",
    })

    useEffect(() => {
        let formatedDate = null;
        let genres = null;
        getCurrentProfile();
        if( profile && profile.dob) {
            const dobDate = new Date(profile.dob)
            formatedDate = FormatDate(dobDate)
        }
        console.log(profile)
        if(profile && profile.favoriteGenre) {
            genres = profile.favoriteGenre.toString()
        }
        console.log(genres)
        setFormData({
            dob: loading || !profile || !profile.dob ? "" : formatedDate,
            bio: loading || !profile || !profile.bio ? "" : profile.bio,
            favoriteGenre: loading || !profile || !profile.favoriteGenre ? "" : genres,
        })
    }, [loading])

    const { dob, bio, favoriteGenre } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    }

    return (
        <Fragment>
             <h1 className="large text-dark">
                Edit Your Profile
            </h1>
            <p className="lead text-light">
                <i className="fas fa-user"></i> Let's get some information to make your
                profile stand out
            </p>
            <small className='text-light'>* = required field</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input type="date" placeholder="MM/DD/YYYY" name="dob" value={dob} onChange={e => onChange(e)} />
                <small className="form-text  text-light"
                    >Could be your own company or one you work for
                </small>
                </div>
                <div className="form-group">
                <input type="text" placeholder="Favorite Genres" name="favoriteGenre" value={favoriteGenre} onChange={e => onChange(e)}/>
                <small className="form-text text-light"
                    >Please use comma separated values (eg.
                    Mystery, Crime, Children's, Autobiography)</small>
                </div>
                <div className="form-group">
                <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e=> onChange(e)}></textarea>
                <small className="form-text text-light">Tell us a little about yourself</small>
                </div>

                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-dark my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    );
};

EditProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile));