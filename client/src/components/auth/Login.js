import React, {Fragment, useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'



const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
            console.log('success')
    }

    return (
        <Fragment>
            <div className='col-md-8 m-auto'>
                <h1 className="large text-primary">Login </h1>
                    <p className="lead"><FontAwesomeIcon icon={faUser} /> Sign Into Your Account</p>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name="email" 
                            value={email} 
                            onChange={e => onChange(e)}/>
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </form>
                    <p className="my-1">
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
            </div>
        </Fragment>
    )
}

export default Login;
