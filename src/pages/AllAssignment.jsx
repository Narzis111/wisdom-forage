import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const AllAssignment = () => {
    const { user } = useAuth() || {};
    const allAssignments = useLoaderData();
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");
    const handleDelete = (_id, creator_email) => {
        console.log(_id);
        console.log(creator_email);
        const currentUserEmail = user.email;
        if (currentUserEmail === creator_email) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/assignment/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            // refetch();
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Assignment has been deleted.',
                                    'success'
                                )
                                const remaining = allAssignments.filter(assign => assign._id !== _id);
                                setSelectedDifficulty(remaining);
                            }
                        })

                }
            })
        } else {
            Swal.fire({
                title: 'You can not do it?',
                text: "You are unauthorized to delete this!",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#d33',

            })
        }

    }
    const filteredAssignments = selectedDifficulty === "all"
        ? allAssignments
        : allAssignments.filter(assign => assign.difficulty_level === selectedDifficulty);




    return (
        <div className="mb-36">
            <div>
                <Zoom>
                    <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24">
                        Discover Our all Assignments<br />
                        Total Data: {allAssignments.length}
                    </h2>
                </Zoom>
                <Fade>
                    <p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">
                        Our all assignmet page is your gateway to discovering the rich array of tools and resources available to enhance your learning experience. Dive into a world of possibilities as you explore the key features that set Wisdom Forge apart.
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
                    {/* {filteredAssignments.slice(0, 4).map((assign) => ( */}
                    {filteredAssignments.map((assign) => (
                        <div key={assign._id}>

                            <div className="card bg-base-100 h-3/4 w-72 shadow-xl border-2 border-slate-300 hover:border-secondary">
                                <div className="h-[350px] p-4">
                                    <img className='w-full h-full object-fit hover:scale-105' src={assign.thumbnail_url} alt="Item" />
                                </div>
                                <div className="flex justify-between w-full p-4">
                                    <div className='space-y-2'>
                                        <h2 className="card-title hover:underline text-md">Name: {assign.title}</h2>
                                        <h2 className="card-title hover:underline text-xs">Creator: {assign.creator_email}</h2>
                                        <div className="badge bg-purple-300 hover:bg-purple-600">Level: {assign.difficulty_level}</div>
                                        <h2 className="card-title hover:underline"></h2>
                                        <p>Marks: <span className='font-bold'> {assign.marks}</span></p>
                                        <p>Description: {assign.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="join">
                                                <Link to={`/assignment/${assign._id}`}>
                                                    <button className="btn">View</button>
                                                </Link>
                                                <Link to={`/update/${assign._id}`}>
                                                    <button className="btn">Edit</button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(assign._id, assign.creator_email)}
                                                    className="btn bg-orange-500">Delete</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;