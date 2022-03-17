import React from "react";
import "./PointList.css";
import Point from "./Point";

const PointList = ({
  pointItems,
  onPointClick,
  currentPage,
  searchedItems,
}) => {
  return (
    // <Link to={`/point/view/${selectPointItem.id}`}>
    <table className="point-table">
      <tr>
        <th width="4%">번호</th>
        <th width="5%">업체명</th>
        <th width="10%">연락처</th>
        <th width="10%">이메일</th>
        <th width="5%">포인트</th>
        <th width="5%">구분</th>
        <th width="5%">신청일</th>
        <th width="5%">상태변경일</th>
        <th width="5%">상태</th>
        <th width="5%">상태변경자</th>
      </tr>
      {pointItems.map((item) => {
        return (
          <Point
            onPointClick={onPointClick}
            pointItem={item}
            currentPage={currentPage}
            searchedItems={searchedItems}
          />
        );
      })}
    </table>
    // </Link>
  );
};

export default PointList;
