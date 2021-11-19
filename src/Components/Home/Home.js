import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ShowReviews from '../Reviews/ShowReviews';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import BestThing from '../BestThing/BestThing';
const Home = () => {
    const [services, setServices] = useState([])
    const { isLoading } = useAuth();
    const cartSlice = services.slice(-6)
    useEffect(() => {
        fetch('https://still-river-80728.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (isLoading) {
        return <div className="text-center"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <div className="">
            <Banner></Banner>
            <div className="p-4">
                <h1 className="text-center m-4">Bikes
                </h1>
                <div className="services">
                    {
                        cartSlice.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }

                </div>
            </div>
            <div className="container">
                <BestThing></BestThing>
                <hr />
                <ShowReviews></ShowReviews>


            </div>
        </div>
    );
};

export default Home;