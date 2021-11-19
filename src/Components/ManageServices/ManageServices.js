import React, { useEffect, useState } from 'react';
import "./ManageServices.css"
const ManageServices = () => {
    const [manageorders, setManageOrders] = useState([]);
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, []);
    const handleDelete = id => {
        const procced = window.confirm('Are you want to delete booking list?')
        if (procced) {
            const url = `https://still-river-80728.herokuapp.com/services/${id}`
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
                        className="text-center all-orders card-services">
                        <img src={manageorder.img} className="" alt="..." />
                        <div>
                            <h4 className=""> {manageorder.name}</h4>
                            <h4 className="">$ {manageorder.cost}</h4>
                            <button className="btn btn-danger" onClick={() => handleDelete(manageorder._id)}><i class="fa fa-trash-o"></i> Delete Services</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;