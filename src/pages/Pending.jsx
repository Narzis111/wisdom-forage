import PendingRow from "../components/PendingRow";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const Pending = () => {


  const [pendings, setPendings] = useState([]);

  const url = `https://assignment-11-server-ruby.vercel.app/submitPending`;


  useEffect(() => {
      axios.get(url, {withCredentials: true})
      .then(res => {
        console.log(res.data);
        setPendings(res.data);

      })
  }, [url]);


    return (
      <>
        <Helmet>
        <title>Wisdom Forge | Pending</title>
       </Helmet>
        <div>
            <div className="mt-5 mb-8">
                        <p className="text-center text-3xl font-semibold">
                            <span className="mr-3 text-[#FF497C]">
                                <i className="bx bxs-alarm-add"></i>
                            </span>
                            <span className="dark:text-white">All of our Pending Assignments</span>
                        </p>
                        <h1 className="text-xs text-center">total data:{pendings.length}</h1>
                    </div>
           
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Total Marks</th>
                            <th>Examinee Name</th>
                            <th>Examinee Email</th>
                          
                            <th>Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>
      
                        
                        {
                            pendings.map(pend => <PendingRow
                                key={pend._id}
                                pend={pend}
                               
                            ></PendingRow>)
                        }
                    </tbody>

                </table>
            </div>
            
        </div></>
    );
};

export default Pending;
