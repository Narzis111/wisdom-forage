import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Zoom } from "react-reveal";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

const TakeAssignment = () => {
    const { user } = useAuth() || {};
    const {id} = useParams();
  
   const [updates, setUpdates] = useState({});
   const url = `https://server-11-nine.vercel.app/assignment/${id}`;

   useEffect(() => {
       axios(url, { withCredentials: true } )
           .then(res => {
               console.log(res.data);
               setUpdates(res.data)
           })
   }, [url]);
  
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const doc = e.target.doc.value;
        const note = e.target.note.value;
        const email = user?.email;
        const examineeName = user?.displayName;
        const status = 'Pending';
     
        const submit = {
            tilte: updates.title,
            marks: updates.marks,
            examineeName,
            email,
            submit_note: note,
            submit_doc: doc,
            status,
        }

        console.log(submit);

        fetch('https://server-11-nine.vercel.app/submit', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submitted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            })
       
    };

    return (
        <>
        <Helmet>
            <title>WisdomForage|Take Assignment</title>
        </Helmet>
        <div>
            <Zoom><h2 className="text-center lg:text-3xl text-xl font-bold hover:animate-heartBeat-2s transition-transform mt-24 mb-4">Submit Your Assignment Here!</h2>
            </Zoom>
            <h2 className="text-center">Assignment Title: {updates.title}</h2>
            <h3 className="text-center">Total Mark: {updates.marks}</h3>
            <form onSubmit={handleSubmit} className="max-w-[450px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Examinee Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} disabled name="examineeName" className="input input-bordered" />
                    </div>
                   
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" disabled defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="block mt-4 mb-2 dark:text-white" htmlFor="short Note">
                            Short Note
                        </label>
                        <textarea
                            className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                            placeholder="Enter Short Note"
                            id="note"
                            name="note"
                            required
                        ></textarea>

                    </div>
                    <div className="form-control">
                        <label className="block mt-4 mb-2 dark:text-white" htmlFor="Document Link">
                            Your Document Link
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-[#92b0e7]"
                            placeholder="Insert pdf/image Doc"
                            id="doc"
                            name="doc"
                            required
                        ></input>
                       
                        <div id="previewContainer"></div>                      
                    </div>
                </div>
             
                <div className="form-control">
                <input className="btn btn-primary btn-block mb-6" type="submit" value="Submit Confirm" />
            </div>
            </form>
        </div></>
    );
};

export default TakeAssignment;
