import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import SubmitRow from "./SubmitRow";


const Submit = () => {
    const { user } = useAuth();

    const [submit, setSubmit] = useState([]);
    
    const url = `http://localhost:5000/mySubmit/${user?.email}`;

    useEffect(() => {
        axios(url)
            .then(res => {
                console.log(res.data);
                setSubmit(res.data)})
    }, [url]);

    const { title, marks, status, obtained_mark, feedback } = submit

    return (
        <div>
            <h1>total data:{submit.length}</h1>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Title</th>
                            <th>Marks</th>
                            <th>Obtained Marks</th>
                            <th>Feedback</th>

                        </tr>
                    </thead>

                    <tbody>


                        {
                            submit.map(sub => <SubmitRow
                                key={sub._id}
                                sub={sub}

                            ></SubmitRow>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Submit;