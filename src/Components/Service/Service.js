import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"
const Service = (props) => {
    const { _id, location, description, cost, img, name } = props.service
    return (
        <div>
            <div className="container card border border-1 border-success">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3>{name}</h3>
                    <h5 className="card-title text-center text-danger">{location}</h5>
                    <p className="card-text">{description}</p>
                    <p>${cost}</p>
                    <Link to={`/booking/${_id}`} className="text-center">
                        <button className="btn btn-success btn-lg "><i class="fa fa-book"></i> Booking Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;