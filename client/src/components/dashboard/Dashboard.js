import React, {Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({ getCurrentProfile, auth: {user} , profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [])
    

    return loading && profile == null ? <Spinner /> : 
    <Fragment>
        <h1 className='large text-primary '>Dashboard</h1>
        <p className='lead text-dark'>
       <FontAwesomeIcon icon={faUser} /> Welcome {user && user.first_name && user.last_name ? user.first_name + " " + user.last_name: null}
       </p>
       {profile != null ? <Fragment></Fragment> : <Fragment>
           <div className='row'>
            <div class="col-xs-12 col-lg-6 mb10"> You have not created a profile.  Tell us more about yourself. </div>
            <div class="col-xs-3 col-lg-3"><Link to='/create-profile' className='btn btn-primary'>Create Profile</Link></div>
           </div>
           </Fragment>}
        <h3 className='large text-dark mt10'><FontAwesomeIcon icon={faBookOpen} /> My Notebooks</h3>
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
