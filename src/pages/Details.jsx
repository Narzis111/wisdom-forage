import { Fade, Zoom } from "react-reveal";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Details = () => {
    const { id } = useParams();
    const [views, setViews] = useState(null);

    useEffect(() => {
        const fetchAssignmentDetails = async () => {

            const response = await axios.get(`https://server-11-nine.vercel.app/assignment/${id}`, { withCredentials: true });
            setViews(response.data);

        };

        fetchAssignmentDetails();
    }, [id]);

    const { title, description, marks, thumbnail_url, difficulty_level, due_date, _id, creator_email } = views || {};
    const { user } = useAuth() || {};

    const handleTake = (_id, creator_email) => {
        console.log(_id);
        console.log(creator_email);
    };

    return (
        <div>
            <div>
                <Zoom>
                    <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">View Detail of Selected Assignment</h2>
                </Zoom>
                <Fade>
                    <p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Explore in-depth details of your selected assignment, including title, description, marks, difficulty level, due date, and more. Dive into learning with precision and clarity</p>
                </Fade>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-[320px] h-[300px]">
                        <img className="w-full h-full" src={thumbnail_url} alt={title} />
                    </div>
                    <div className="space-y-6 ml-4">
                        {title && (
                            <h1 className="text-2xl font-bold">Assignment Title: {title}</h1>
                        )}
                        {difficulty_level && (
                            <h1>Difficulty level: {difficulty_level}</h1>
                        )}
                        {marks && (
                            <h1>Marks: {marks}</h1>
                        )}
                        {description && (
                            <p>Detail: {description}</p>
                        )}
                        {due_date && (
                            <p>Date: {due_date}</p>
                        )}
                        {user?.email !== creator_email && (
                            <Link to={`/take/${_id}`}>
                                <button onClick={() => handleTake(_id, creator_email)} className="btn btn-primary text-white mt-3">Take Assignment</button>
                            </Link>
                        ) }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
