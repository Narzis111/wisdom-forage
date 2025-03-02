import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-reveal";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Marking = () => {
    const { id } = useParams();

    const [number, setNumber] = useState({});

    const url = `https://server-11-nine.vercel.app/submit/${id}`
    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setNumber(res.data)
            })
    }, [url]);

    const { submit_doc, submit_note, marks, email } = number;

    const handleMarkUpdate = (e) => {
        e.preventDefault();

        const obtained_mark = parseFloat(e.target.obtained_mark.value);
        const feedback = e.target.feedback.value;

        // Validation
        if (obtained_mark > marks) {

            toast.error("Provided mark cannot exceed total marks.");
            return;
        }

        const updateSubmit = {
            obtained_mark,
            feedback,
            status: "Completed"
        };

        fetch(`https://server-11-nine.vercel.app/submit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Marked Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };


    return (
        <>
            <Helmet>
                <title>
                    WisdomForage|Marking
                </title>
            </Helmet>
            <div>

                <div className="text-center">
                    <Zoom><h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24 mb-4">Submit Your Feedback Here!</h2>
                    </Zoom>
                    <h1>Submitted By: {email}</h1>
                    <h1>Submitted Link: <button>{submit_doc}</button></h1>
                    <h1>Message: {submit_note}</h1>
                    <h1>Total Marks: {marks}</h1>

                </div>
                <form onSubmit={handleMarkUpdate} className="max-w-[450px] mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Achieved Mark</span>
                        </label>
                        <input type="text" name="obtained_mark" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feedback</span>
                        </label>
                        <textarea
                            className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                            placeholder="Enter your feedback"
                            id="feedback"
                            name="feedback"
                            required
                        ></textarea>

                    </div>


                    <div className="form-control mt-4">
                        <input className="btn btn-primary btn-block" type="submit" value="Submit Marks" />
                    </div>
                </form>
            </div>
        </>

    );
};

export default Marking;