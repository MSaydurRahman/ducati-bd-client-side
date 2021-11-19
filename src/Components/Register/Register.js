import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const { authError, user, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matched');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-warning text-center">Please Register</h2>
            {isLoading && <div className="text-center"><Spinner animation="border" variant="danger" /></div>}
            <div className="bg-image">
                <div className="login container">
                    <div className="container login-text">
                        <h1>For more information <br /> please let us know</h1>
                        <small>Contact with us</small>
                    </div>
                    <div className="container rounded">
                        {!isLoading &&
                            <Form onSubmit={handleLogInSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name"
                                        onBlur={handleOnBlur} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email"
                                        onBlur={handleOnBlur} required />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password"
                                        onBlur={handleOnBlur} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Re type password" name="password2"
                                        onBlur={handleOnBlur} required />
                                </Form.Group>
                                <Button variant="primary" type="submit" >
                                    Register
                                </Button>
                                <hr />
                                <div>
                                    <h6>Have Account ? Please <Link className="register-link" to="/login">Login</Link></h6>
                                </div>
                            </Form>}
                        {user?.email && <div className="alert alert-success container" role="alert">
                            User created successfully
                        </div>}
                        {authError && <div className="alert alert-danger container" role="alert">
                            {authError}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;