import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import SubmitRow from "./SubmitRow";
import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';


const Submit = () => {
    const { user } = useAuth();

    const [submit, setSubmit] = useState([]);
    
    const url = `https://assignment-11-server-ruby.vercel.app/mySubmit/${user?.email}`;

    useEffect(() => {
        axios(url, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setSubmit(res.data)})
    }, [url]);

    return (
        <>
        <Helmet>
            <title>
                WisdomForage|Submit
            </title>
        </Helmet>
        <div>
              <div className="mt-5 mb-8">
                        <p className="text-center text-3xl font-semibold">
                            <span className="mr-3 text-[#FF497C]">
                                <i className="bx bxs-alarm-add"></i>
                            </span>
                            <span className="dark:text-white">My Assignments</span>
                        </p>
                    </div>
            <h1 className="text-center text-xs">total data:{submit.length}</h1>

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

        </div></>
    );
};

export default Submit;
Submit.propTypes = {
    submit: PropTypes.object,
}