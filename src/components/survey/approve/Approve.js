import React from "react";
import { Link } from "react-router-dom";

const Approve = ({ post }) => {
  return (
    <tr>
      <td>{post.num}</td>
      <td>
        {/* <Link to={`/survey/approve/view/${surveyApproveItem.id}`}>
          {surveyApproveItem.surveyName}
        </Link> */}
        <Link to={`/survey/approve/view/1`}>
          {post.surveyName}
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
