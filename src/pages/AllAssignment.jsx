import { useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const AllAssignment = () => {
    const { user } = useAuth() || {};
    const allAssignments = useLoaderData();
    const [selectedDifficulty, setSelectedDifficulty] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    // Calculate index of the first and last item of the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Filter assignments based on selected difficulty
    const filteredAssignments = selectedDifficulty === "all"
        ? allAssignments
        : allAssignments.filter(assign => assign.difficulty_level === selectedDifficulty);

    // Slice the filteredAssignments 
    const currentAssignments = filteredAssignments.slice(indexOfFirstItem, indexOfLastItem);
    const handleDelete = (_id, creator_email) => {
        // console.log(_id);
        // console.log(creator_email);
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

                    fetch(`https://assignment-11-server-ruby.vercel.app/assignment/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
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




    const handlePerPageChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page 
    };

    return (
        <>
            <Helmet>
                <title>WisdomForage|All Assignment</title>
            </Helmet>

            <div className="mb-36">
                <div>
                    <motion.div className="text-center"
                        animate={{
                            scale: [1, 1, 1, 1, 1],
                            rotate: [0, 0, 360, 360, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                    >
                        {/* Content to animate */}
                        <h1> Discover Our all Assignments</h1>
                    </motion.div>
                    <Zoom>
                        <h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform">

                            <span className="text-xs">number of total assignment: {allAssignments.length}</span>
                        </h2>
                    </Zoom>
                    <Fade>
                        <p className="max-w-[750px] hover:animate-flash-2s text-center mx-auto py-6">
                            Our all assignmet page is your gateway to discovering the rich array of tools and resources available to enhance your learning experience.
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

                        {currentAssignments.map((assign) => (
                            <div key={assign._id}>
                                <motion.div className="text-center"
                                    animate={{
                                        scale: [1, 2, 2, 1, 1],
                                        rotate: [0, 0, 360, 360, 0],
                                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                    }}
                                >
                                    {/* Content to animate */}
                                    <div className="card bg-base-100 h-[370px] w-full md:w-72 lg:w-72 shadow-xl border-2 border-slate-300 hover:border-primary">
                                        <div className="h-[230px] p-4">
                                            <img className='w-full h-full object-fit hover:scale-105' src={assign.thumbnail_url} alt="Item" />
                                        </div>
                                        <div className="flex justify-between w-full p-4">
                                            <div className='space-y-2'>
                                                <h2 className="card-title hover:underline text-sm"> {assign.title}</h2>


                                                <h2 className="card-title hover:underline"></h2>
                                                <div className="flex justify-between text-xs">
                                                    <div className="badge bg-purple-300 hover:bg-purple-600">Level: {assign.difficulty_level}</div>
                                                    <p>Marks: <span className='font-bold'> {assign.marks}</span></p>


                                                </div>
                                                <div className="card-actions justify-center">
                                                    <div className="join space-x-3">
                                                        <Link to={`/assignment/${assign._id}`}>
                                                            <button className="btn">View</button>
                                                        </Link>
                                                        <Link to={`/update/${assign._id}`}>
                                                            <button className="btn">Edit</button>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(assign._id, assign.creator_email)}
                                                            className="btn bg-red-300">Delete</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
                <select
                    className="bg-white border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    value={itemsPerPage}
                    onChange={handlePerPageChange}
                >
                    <option value={2}>2 per page</option>
                    <option value={4}>4 per page</option>
                    <option value={5}>5 per page</option>
                </select>
            </div>

            {/* Pagination display */}
            <div className="flex justify-center mt-4">
                <span className="mr-2">Page:</span>
                {Array.from({ length: Math.ceil(filteredAssignments.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        className={`px-2 py-1 mx-1 rounded-md hover:bg-gray-200 ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
};

export default AllAssignment;
