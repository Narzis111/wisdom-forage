import ReactDatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";



const Update = () => {
    const { id } = useParams (); 
    const navigate = useNavigate()

    const [dueDate, setDueDate] = useState(new Date());


    const [updates, setUpdates] = useState({});
    const url = `https://assignment-11-server-ruby.vercel.app/assignment/${id}`;

    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setUpdates(res.data)
            })
    }, [url]);

    
    const { title, description, marks, thumbnail_url, difficulty_level, due_date } = updates || {};


    const handleDateChange = (date) => {
        setDueDate(date);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(e);

        const thumbnail_url = e.target.thumbnail_url.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const marks = e.target.marks.value;
        const difficulty_level = e.target.difficulty_level.value;
        const due_date = e.target.due_date.value;


        const update = {
            title, description, marks, thumbnail_url,
            difficulty_level, due_date, 

        };
 
        // send data to the server
        fetch(`https://assignment-11-server-ruby.vercel.app/assignment/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    .then(() => {
                        // Redirect to the assignments page
                       navigate('/assignment/all');
                    });
                }
               
            })
     
    };
    

    return (
        <>
            <Helmet>
                <title>
                    WisdomForage|Update form
                </title>
            </Helmet>

            <div className="gadgetContainer pt-10">
                <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                    <div className="mt-5 mb-8">
                        <p className="text-center text-3xl font-semibold">
                            <span className="mr-3 text-[#FF497C]">
                                <i className="bx bxs-alarm-add"></i>
                            </span>
                            <span className="dark:text-white">Update Assignment Form</span>
                        </p>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="flex gap-8 lg:flex-row flex-col">
                            <div className="flex-1">
                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="item_name">
                                    Title
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                    type="text"
                                    placeholder="Enter Title"
                                    id="title"
                                    name="title"
                                    defaultValue={title}
                                />
                                <label className="block mb-2 dark:text-white" htmlFor="image">
                                    Image URL
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                    type="text"
                                    placeholder="Enter Image URL"
                                    id="thumbnail_url"
                                    name="thumbnail_url"
                                    defaultValue={thumbnail_url}
                                />
                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="shortDescription">
                                    Description
                                </label>
                                <textarea
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                    placeholder="Enter Description"
                                    id="description"
                                    name="description"
                                    defaultValue={description}
                                ></textarea>

                            </div>
                            <div className="flex-1">


                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="subcategory">
                                    Marks
                                </label>
                                <input
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                    type="number"
                                    placeholder="Enter marks"
                                    id="marks"
                                    name="marks"
                                    defaultValue={marks}
                                />


                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="due_date">
                                    Due Date
                                </label>
                                <ReactDatePicker
                                    className="block p-2 border rounded-md focus:outline-[#92b0e7]"
                                    selected={dueDate}
                                    onChange={handleDateChange}
                                    placeholderText="Select a date"
                                    id="due_date"
                                    name="due_date"
                                    dateFormat="yyyy-dd-MM"
                                    defaultValue={due_date}
                                />


                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="Difficulty Level">
                                    Difficulty level
                                </label>
                                <select
                                    name="difficulty_level"
                                    id="difficulty_level"
                                    defaultValue={difficulty_level}
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                >
                                    <option value="easy">easy</option>
                                    <option value="medium">medium</option>
                                    <option value="hard">hard</option>
                                </select>


                            </div>
                        </div>


                        <input
                            className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800  bg-purple-600 duration-200 text-white cursor-pointer font-semibold"
                            type="submit"
                            value="Update Assignment"
                        />
                    </form>
                </div>

            </div>
        </>
    );
};

export default Update;