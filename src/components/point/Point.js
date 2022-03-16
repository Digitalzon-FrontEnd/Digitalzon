import React from "react";

import { Link } from "react-router-dom";
const Point = ({ onPointClick, pointItem, currentPage, searchedItems }) => {
  return (
    <tr
      onClick={() => {
        onPointClick(pointItem);
      }}
    >
      <td>{pointItem.id}</td>
      <td>
        <Link
          to={{
            pathname: `/point/view/${pointItem.id}`,
            state: {
              currentPage: currentPage,
              searchedItems: searchedItems,
            },
          }}
        >
          {pointItem.companyName}
        </Link>
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
