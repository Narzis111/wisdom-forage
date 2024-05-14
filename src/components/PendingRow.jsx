import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import PropTypes from 'prop-types';

const PendingRow = ({ pend }) => {
    const { user } = useAuth();
    const [showPreview, setShowPreview] = useState(false);
  

    const { tilte, marks, examineeName, email, _id, submit_doc } = pend;

    const handleEyeClick = () => {
      setShowPreview(true);
      
    };
  
    const handleClosePreview = () => {
      setShowPreview(false);
     
    };
  
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
          <>
            <Link to={`/marking/${_id}`}>
              <button className="btn btn-ghost btn-xs">Submit Mark</button>
            </Link>
            <button className="ml-2" onClick={handleEyeClick}>
        <FaEye />
      </button>
      {showPreview && (
        <div className="preview-overlay" onClick={handleClosePreview}>
          <div className="preview-container">
            {/* Render iframe with the PDF/DOC file */}
            <iframe title="Document Preview" src={submit_doc} width="100%" height="100%" />
          </div>
        </div>
      )}
          </>
           
          )}
        </th>
      </tr>
    );
  };
  
  export default PendingRow;
  PendingRow.propTypes = {
    pend: PropTypes.object,
    };