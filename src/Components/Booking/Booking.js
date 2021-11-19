import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddOrder from '../AddOrder/AddOrder';
import "./Booking.css"
const Booking = () => {
    const { _id } = useParams();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    const singleBookingDetail = booking.find(booking => booking._id === _id)
    return (
        <div className=" text-center">
            <div className="booking-order container">
                <div className=" single-details">
                    <small><span>BookingCode:</span> {_id}</small>
                    <h2>{singleBookingDetail?.name}</h2>
                    <br />
                    <h4>cost:${singleBookingDetail?.cost}</h4>
                    <small>Description: {singleBookingDetail?.description}</small>
                    <br />
                    <br />
                </div>
                <div>
                    <AddOrder></AddOrder>
                </div>
            </div>
        </div>
    );
};

export default Booking;