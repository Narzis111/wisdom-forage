// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PendingRow = ({ pend }) => {
    const { user } = useAuth();

    const { tilte, marks, examineeName, email, _id } = pend;
  
    // Check if the email matches the current user's email
    const currentUserEmail = user?.email
    const isCurrentUserEmail = email === currentUserEmail;
  
    return (
      <tr>
        <td>{tilte}</td>
        <td>{marks}</td>
        <td>{examineeName}</td>
        <td>{email}</td>
        <th>
          {isCurrentUserEmail ? (
            <button className="btn btn-ghost btn-xs" disabled>
              Submit Mark
            </button>
          ) : (
            <Link to={`/marking/${_id}`}>
              <button className="btn btn-ghost btn-xs">Submit Mark</button>
            </Link>
          )}
        </th>
      </tr>
    );
  };
  
  export default PendingRow;