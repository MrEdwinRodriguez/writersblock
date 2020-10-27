import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profileActions';


const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        dob: "",
        bio: "",
        favoriteGenres: "",
    })
    const { dob, bio, favoriteGenres } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, false);
    }

    return (
        <Fragment>
             <h1 className="large text-light">
                Create Your Profile
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
                <div class="form-group">
                <input type="text" placeholder="Favorite Genres" name="favoriteGenres" value={favoriteGenres} onChange={e => onChange(e)}/>
                <small class="form-text text-light"
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

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}


export default connect(null, {createProfile})(withRouter(CreateProfile));