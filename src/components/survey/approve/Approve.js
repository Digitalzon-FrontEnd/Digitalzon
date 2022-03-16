import React from "react";
import { Link } from "react-router-dom";

const Approve = ({ surveyApproveItem }) => {
  return (
    <tr>
      <td>{surveyApproveItem.id}</td>
      <td>
        {/* <Link to={`/survey/approve/view/${surveyApproveItem.id}`}>
          {surveyApproveItem.surveyName}
        </Link> */}
        <Link to={`/survey/approve/view/${surveyApproveItem.id}`}>
          {surveyApproveItem.surveyName}
        </Link>
      </td>
      <td>{surveyApproveItem.surveyRequestDate}</td>

      <td>{surveyApproveItem.needSampleCount}</td>
      <td>{surveyApproveItem.completeSampleCount}</td>
      <td>{surveyApproveItem.status}</td>
      <td>{surveyApproveItem.modifiedDate}</td>
      <td>{surveyApproveItem.modifiedBy}</td>
      <td>{surveyApproveItem.affiliation}</td>
    </tr>
  );
};

export default Approve;
