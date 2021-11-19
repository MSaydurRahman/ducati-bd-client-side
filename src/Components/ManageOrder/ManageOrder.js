import React, { useEffect, useState } from 'react';
import "./ManageOrder.css"
const ManageOrder = () => {
    const [manageorders, setManageOrders] = useState([]);
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, []);
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
                        const remaining = manageorders.filter(manageorder => manageorder._id !== id);
                        setManageOrders(remaining);
                    }

                })
        }
    }
    return (
        <div className="container p-4">
            {
                manageorders.map(manageorder =>

                    <div
                        key={manageorder._id}
                        className="text-center all-orders">
                        <h4 className="text-success"> {manageorder.bike}</h4>
                        <h6 className="card-title text-center text-danger"><h5>Order No:</h5> {manageorder.serviceNo}</h6>
                        <h4 className="card-title text-center text-dark">Purchaser Name: {manageorder.Name}</h4>
                        <button className="btn btn-danger" onClick={() => handleDelete(manageorder._id)}><i class="fa fa-trash-o"></i> Delete Order</button>
                    </div>)
            }
        </div>
    );
};

export default ManageOrder;