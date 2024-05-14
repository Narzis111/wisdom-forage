import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddAssignment = () => {
    const { user } = useAuth() || {};
    const [dueDate, setDueDate] = useState(new Date());
    // const navigate = useNavigate()



    const handleAddForm = (e) => {
        e.preventDefault();

        const thumbnail_url = e.target.thumbnail_url.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const marks = e.target.marks.value;
        const difficulty_level = e.target.difficulty_level.value;
        const due_date = dueDate;
        const email = user?.email;

        const info = {
            title, description, marks, thumbnail_url,
            difficulty_level, due_date, creator_email:
                email


        };
         // Image URL validation
      const urlPattern = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
      if (!urlPattern.test(thumbnail_url)) {
        toast.error('Please provide a valid image URL');
        return;
      }

      fetch("https://assignment-11-server-ruby.vercel.app/assignment", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(info),
    })
            .then((res) => res.json())

            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };

    return (
        <>
<Helmet>
        <title>Wisdom Forge | AddForm</title>
       </Helmet>
            <div className="pt-10 max-w-[1000px] mx-auto">
                <div className="shadow-lg p-5 rounded-2xl border dark:bg-[#1a2641d5]">
                    <div className="mt-5 mb-8">
                        <p className="text-center text-3xl font-semibold">
                            <span className="mr-3 text-[#FF497C]">
                                <i className="bx bxs-alarm-add"></i>
                            </span>
                            <span className="dark:text-white">Create Assignment Form</span>
                        </p>
                    </div>
                    <form onSubmit={handleAddForm}>
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
                                    required
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
                                    required
                                />
                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="shortDescription">
                                    Description
                                </label>
                                <textarea
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                    placeholder="Enter Description"
                                    id="description"
                                    name="description"
                                    required
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
                                    required
                                />


                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="due_date">
                                    Due Date
                                </label>
                                <ReactDatePicker
                                    className="block p-2 border rounded-md focus:outline-[#92b0e7]"
                                    selected={dueDate}
                                    onChange={date => setDueDate(date)}
                                    placeholderText="Select a date"
                                    id="due_date"
                                    name="due_date"
                                    required
                                
                                />


                                <label className="block mt-4 mb-2 dark:text-white" htmlFor="Difficulty Level">
                                    Difficulty level
                                </label>
                                <select
                                    name="difficulty_level"
                                    id="difficulty_level"
                                    className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                                >
                                    <option value="easy">easy</option>
                                    <option value="medium">medium</option>
                                    <option value="hard">hard</option>
                                </select>


                            </div>
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <input
                            className="px-4 w-full py-2 mt-4 rounded hover:bg-purple-800  bg-primary duration-200 text-white cursor-pointer font-semibold"
                            type="submit"
                            value="Add Assignment"
                        />
                    </form>
                </div>

            </div>
        </>
    );
};

export default AddAssignment;
