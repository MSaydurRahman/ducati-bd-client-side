import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./Review.css"
const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://still-river-80728.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className=" add-services bg-image">
            <div className="container review login">
                <div>
                    <h2 className="p-4 m-4 text-light">Review Please</h2>
                </div>
                <div className="container">
                    <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("Name")} placeholder="firsName.." defaultValue={user.displayName} />
                        <br />
                        <br />
                        <input {...register("email")} placeholder="email.." defaultValue={user.email} />
                        <br />
                        <br />
                        <input type="number" {...register("star", { required: true, max: 5, min: 0, maxLength: 1 })} placeholder="please review us 0-5 start" />
                        <br />
                        <br />
                        <input className="description" {...register("myDescription", { required: true, maxLength: 2000 })} placeholder="description.." />
                        <br />
                        <br />
                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;