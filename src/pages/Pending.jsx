import PendingRow from "../components/PendingRow";
import axios from "axios";
import { useEffect, useState } from "react";


const Pending = () => {


  const [pendings, setPendings] = useState([]);

  const url = `http://localhost:5000/submitPending`;


  useEffect(() => {
      axios.get(url, {withCredentials:true})
      .then(res => {
        console.log(res.data);
        setPendings(res.data);

      })
  }, [url]);
  const {tilte, marks, email, examineeName} = pendings;
       


    return (
        <div>
            <h1>All Pending Assignments</h1>
            <h1>total data:{pendings.length}</h1>
          
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
            
        </div>
    );
};

export default Pending;