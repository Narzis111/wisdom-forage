import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link, useLoaderData } from "react-router-dom";

const Feature = () => {
    const allAssignments = useLoaderData();
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");

    const filteredAssignments = selectedDifficulty === "all"
        ? allAssignments
        : allAssignments.filter(assign => assign.difficulty_level === selectedDifficulty);

    return (
        <div className="mb-36">
            <div>
                <Zoom>
                    <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">
                        Discover Our Features View<br />
                        Feature : Total Data: {allAssignments.length}
                    </h2>
                </Zoom>
                <Fade>
                    <p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">
                        Our feature section is your gateway to discovering the rich array of tools and resources available to enhance your learning experience. Dive into a world of possibilities as you explore the key features that set Wisdom Forge apart.
                    </p>
                </Fade>
            </div>

            <div>
                <div className="flex justify-center mb-4">
                    <select
                        className="bg-white border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="all">All Difficulty Levels</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredAssignments.slice(0, 4).map((assign) => (
                        <div key={assign._id}>
                            <Link to={`/assignment/${assign._id}`}>
                                <div className="card bg-base-100 h-96 shadow-xl border-2 border-slate-300 hover:border-secondary">
                                    <div className="h-[300px] p-4">
                                        <img className='w-full h-full object-fit hover:scale-105' src={assign.thumbnail_url} alt="Item" />
                                    </div>
                                    <div className="flex justify-between w-full p-4">
                                        <div className='space-y-2'>
                                            <h2 className="card-title hover:underline">Name: {assign.title}</h2>
                                            <div className="badge bg-purple-300 hover:bg-purple-600">Level: {assign.difficulty_level}</div>
                                            <h2 className="card-title hover:underline"></h2>
                                            <p>Marks: <span className='font-bold'> {assign.marks}</span></p>
                                            <p>Description: {assign.description}</p>
                                            <button className="btn btn-info">Detail</button>
                                            <button className="btn btn-success">Update</button>
                                            <button className="btn btn-error">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
