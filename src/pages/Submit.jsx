import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import SubmitRow from "./SubmitRow";

const Submit = () => {
    const { user } = useAuth();
    const [submit, setSubmit] = useState([]);

    const url = `http://localhost:5000/submit?email=${user?.email}`;

    useEffect(() => {
        axios.get(url)
        // axios.get(url, {withCredentials: true})
        .then(res => {
        console.log(res.data);
            setSubmit(res.data);

        })  }, [url]);
       

    // const handleDelete = id => {
    //     const proceed = confirm('Are You sure you want to delete');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successful');
    //                     const remaining = bookings.filter(booking => booking._id !== id);
    //                     setBookings(remaining);
    //                 }
    //             })
    //     }
    // }

    // const handleSubmit = id => {
    //     fetch(`http://localhost:5000/submit/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 // const remaining = bookings.filter(booking => booking._id !== id);
    //                 // const updated = bookings.find(booking => booking._id === id);
    //                 // updated.status = 'confirm'
    //                 // const newBookings = [updated, ...remaining];
    //                 // setBookings(newBookings);
    //             }
    //         })
    // }

    return (
        <div>
            <h1>total data:{submit.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Your Note</th>
                            <th>Submitted Link</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            submit.map(sub => <SubmitRow
                                key={sub._id}
                                sub={sub}
                                // handleDelete={handleDelete}
                                // handleSubmit={handleSubmit}
                            ></SubmitRow>)
                        }
                    </tbody>

                </table>
            </div>
            
        </div>
    );
};

export default Submit;