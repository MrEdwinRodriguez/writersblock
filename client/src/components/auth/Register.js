import React, {Fragment, useState, Profiler} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'


const Register = ({setAlert, register}) => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { first_name, last_name, email, password, password2 } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            console.log(first_name, last_name, email, password, password2)
            register({first_name, last_name, email, password, password2 })
        }
    }

    return (
        <Fragment>
            <div className='col-md-8 m-auto'>
                <h1 className="large text-light">Sign Up</h1>
                    <p className="lead text-light"><FontAwesomeIcon icon={faUser} /> Create Your Account</p>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                        <input type="text" placeholder="First Name" name="first_name" value={first_name} onChange={e => onChange(e)}  />
                        </div>
                        <div className="form-group">
                        <input type="text" placeholder="Last Name" name="last_name" value={last_name} onChange={e => onChange(e)}  />
                        </div>
                        <div className="form-group">
                        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)}/>
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            minLength="6"
                            value={password2}
                            onChange={e => onChange(e)}
                        />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Register" />
                    </form>
                    <p className="my-1 text-light">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
            </div>
        </Fragment>
    )
}

Register.propType = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    
};
export default connect(null, {setAlert, register})(Register);
