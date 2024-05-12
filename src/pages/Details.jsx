import { Fade, Zoom } from "react-reveal";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Details = () => {
    const views = useLoaderData();
       console.log(views);

    const {
        title, description, marks, thumbnail_url,
        difficulty_level, due_date, _id, creator_email
        
    } = views;
    const { user } = useAuth() || {};

    const handleTake = (_id, creator_email) => {
        console.log(_id);
        console.log(creator_email);
    

    }
    return (
        <div>
           
            <div>


                <Zoom><h2 className="text-center lg:text-5xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">View Detail of Selected Assignment</h2>
                </Zoom>
                <Fade><p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">Explore in-depth details of your selected assignment, including title, description, marks, difficulty level, due date, and more. Dive into learning with precision and clarity</p>
                </Fade>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-[400px] h-[400px]">
                        <img className="w-full h-full" src={thumbnail_url} />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">Assignment Title: {title}</h1>
                        <h1>Difficulty level: {difficulty_level}</h1>
                        <h1>Marks: {marks}</h1>
                        <p>Detail: {description}</p>
                        <p>Date: {due_date}</p>
                        {user?.email !== creator_email && (
                            <Link to={`/take/${_id}`}>
                                <button onClick={() => handleTake(_id, creator_email)} className="btn bg-purple-600 mt-3">Take Assignment</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;