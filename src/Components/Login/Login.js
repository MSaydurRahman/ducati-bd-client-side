import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogInSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <h2 className="text-warning text-center">Please Login</h2>
            {isLoading && <div className="text-center"><Spinner animation="border" variant="danger" /></div>}
            <div className="bg-image">
                <div className="login container">
                    <div className="container login-text">
                        <h1>For more information <br /> please let us know</h1>
                        <small>Contact with us</small>
                    </div>
                    <div className="container rounded">
                        {!isLoading && <Form className="container" onSubmit={handleLogInSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    name="email"
                                    onChange={handleOnChange} required
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password"
                                    onChange={handleOnChange} required />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Login
                            </Button>
                            <hr />
                            <div>
                                <h6>New User ? Please <Link className="register-link" to="/register">Register</Link></h6>
                            </div>
                            <h6 className="container text-center">Google Sign-In</h6>
                            <Button onClick={handleGoogleSignIn} className="text-center btn btn-danger container">GoogleSignIn</Button>
                        </Form>}
                        {user?.email && <div className="alert alert-success container" role="alert">
                            Log in successfully
                        </div>}
                        {authError && <div className="alert alert-danger container" role="alert">
                            {authError}
                        </div>}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;