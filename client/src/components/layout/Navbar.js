import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ auth: {isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <ul>
      <li><Link to="/dashboard"><FontAwesomeIcon icon={faUser} /> <span className='hide-sm'>Dashboard</span></Link></li>
      <li><a onClick={logout} href='#!'><FontAwesomeIcon icon={faSignOutAlt} /> <span className='hide-sm'>Lougout</span></a></li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  )
  return (
      <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i>Writers Block</Link>
      </h1>
      { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToPropes = state => ({
  auth: state.auth
})
export default connect(mapStateToPropes, {logout})(Navbar);