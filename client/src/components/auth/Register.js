import React, {Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'



const Register = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { first_name, last_name, email, password, password2 } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('passwords do not match');
        } else {
            console.log(formData)
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><FontAwesomeIcon icon={faUser} /> Create Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                    <input type="text" placeholder="First Name" name="first_name" value={first_name} onChange={e => onChange(e)} required />
                    </div>
                    <div className="form-group">
                    <input type="text" placeholder="Last Name" name="last_name" value={last_name} onChange={e => onChange(e)} required />
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
                <p className="my-1">
                    Already have an account? <a href="login.html">Sign In</a>
                </p>
        </Fragment>
    )
}

export default Register;
