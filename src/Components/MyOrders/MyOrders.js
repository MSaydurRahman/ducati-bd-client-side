import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import "./MyOrders.css"
const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        const url = `https://still-river-80728.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);
    //
    const handleDelete = id => {
        const procced = window.confirm('Are you want to delete booking list?')
        if (procced) {
            const url = `https://still-river-80728.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted')
                        const remaining = myOrders.filter(manageorder => manageorder._id !== id);
                        setMyOrders(remaining);
                    }

                })
        }
    }
    return (
        <div className=" text-center p-4 ">
            <h2>Total order:{myOrders.length}</h2>
            <div className=" container home">

                {
                    myOrders.map(myOrder =>
                        <div className="p-4"
                            key={myOrder._id}
                        >
                            <div className="orders p-4 container">
                                <h3 className="text-success text-center">Bike: {myOrder.bike}</h3>
                                <small className="card-title text-center text-danger">{myOrder.serviceNo}</small>
                                <h4 className="card-title text-center text-primary">Name: {myOrder.Name}</h4>
                                <h6 className="text-center text-">Eamil: {myOrder.email}</h6>
                                <h6 className="text-center text-">Contact: {myOrder.ContactNo}</h6>
                                <button className="btn btn-success mx-2">Approved</button>
                                <button className="btn btn-primary" onClick={() => handleDelete(myOrder._id)}>Cancel Order</button>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;