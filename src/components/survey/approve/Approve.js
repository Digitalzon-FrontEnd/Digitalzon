import React from "react";
import { Link } from "react-router-dom";

const Approve = ({ surveyApproveItem, currentPage, searchedItems }) => {
  return (
    <tr>
      <td>{post.num}</td>
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
      <td>{post.date}</td>

      <td>{post.needSample}</td>
      <td>{post.completeSample}</td>
      <td>{post.state}</td>
      <td>{post.modifiedDate}</td>
      <td>{post.modifiedBy}</td>
      <td>{post.affiliation}</td>
    </tr>
  );
};

export default Approve;
