import React from "react";
import { Link } from "react-router-dom";

const Approve = ({ surveyApproveItem, currentPage, searchedItems }) => {
  return (
    <tr>
      <td>{surveyApproveItem.id}</td>
      <td>
        <Link
          to={{
            pathname: `/survey/approve/view/${surveyApproveItem.id}`,
            state: {
              currentPage: currentPage,
              searchedItems: searchedItems,
            },
          }}
        >
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
