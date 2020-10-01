import React, {Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ getCurrentProfile, auth: {user} , profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [])

    return loading && profile == null ? <Spinner /> : 
    <Fragment>
       <h1 className='large text-light'>Dashboard</h1>
       <p className='lead text-light'>
       <FontAwesomeIcon icon={faUser} /> Welcome {user && user.first_name && user.last_name ? user.first_name + " " + user.last_name: null}
       </p>
       {profile != null ? <Fragment>Has</Fragment> : <Fragment>
           <p className='text-light'>You have not created a profile.  Tell us more about you.</p>
           <Link to='/create-profile' className='btn btn-primary my-1'>Create Profile</Link>
           </Fragment>}
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)
