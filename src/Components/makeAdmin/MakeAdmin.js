import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import "./MakeAdmin.css"
const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://still-river-80728.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                else {
                    return;
                }

            })
        e.preventDefault();
    }
    return (
        <div className=" p-4 m-4">
            <div className="make-admin container">
                <h2 className="text-center">Make Admin</h2>
                <div>
                    <Form onSubmit={handleAdminSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleOnBlur} />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            {success && <div className="alert alert-success container mt-4" role="alert">
                Create Admin successfully
            </div>}

        </div>
    );
};

export default MakeAdmin;