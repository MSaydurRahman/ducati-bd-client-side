import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import "./Services.css"
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="text-center">
            <Banner></Banner>
            <br />
            <div className="text-center container">
                <div className=" services p-4 home">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;