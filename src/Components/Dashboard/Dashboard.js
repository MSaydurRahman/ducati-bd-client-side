import React from 'react';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import "./Dashboard.css"
const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    return (
        <Navbar bg="warning" expand="lg">
            <Container className="nav-bar bg-warning">
                <div className="nav-img ">
                    <img src={"https://ducatiasiapacific.com/wp-content/uploads/2021/05/Diavel-1260-S-BYG-MY22-Model-Preview-1050x650-1.png"} alt="" />
                    <h2 className="text-header text-danger">DucatiBD</h2>
                </div>

                <div>
                    <Nav className="me-auto">
                        {!admin && <Link to="/home">Home</Link>}
                        {!admin && <Link to="/services">Bikes</Link>}
                    </Nav>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown className="dropdown-bar" title="Dashboard" id="basic-nav-dropdown">
                                <div></div>
                                {(user?.email && !admin) && <Link to="/pay">Payment</Link>}
                                <div></div>

                                {(user?.email && !admin) && <Link to="/orders">My Orders</Link>}
                                <div></div>

                                {(user?.email && !admin) && <Link to="/review">Review</Link>}
                                <div></div>

                                <div></div>


                                {admin && <Link to="/manageorder">All Orders</Link>}
                                <div></div>
                                {admin && <Link to="/manageservices">All Services</Link>}
                                <div></div>
                                {admin && <Link to="/addservices">Add Services</Link>}
                                <div></div>
                                {admin && <Link to='/admin'><span>Add admin</span></Link>}
                                <div></div>
                                {!user?.email && <h6 className="text-danger p-2">Please Log in First</h6>}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    {user.email && <span className="text-success text-lg"><span className="text-dark">User:</span> {user.displayName} </span>}

                    {user?.email ?
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                        :
                        <Link to="/login">Login</Link>}
                </div>
            </Container>
        </Navbar >
    );
};

export default Dashboard;