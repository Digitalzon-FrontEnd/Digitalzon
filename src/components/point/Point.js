import React from "react";

import { Link } from "react-router-dom";
const Point = ({ onPointClick, pointItem }) => {
  return (
    <tr
      onClick={() => {
        onPointClick(pointItem);
      }}
    >
      <td>{pointItem.id}</td>
      <td>
        <Link to={`/point/view/${pointItem.id}`}>{pointItem.companyName}</Link>
      </td>
      <td>{pointItem.phone}</td>

      <td>{pointItem.email}</td>
      <td>{pointItem.pointAmount}</td>
      <td>{pointItem.division}</td>
      <td>{pointItem.applyDate}</td>
      <td>{pointItem.modifiedDate}</td>
      <td>{pointItem.status}</td>
      <td>{pointItem.modifiedBy}</td>
    </tr>
  );
};

export default Point;
