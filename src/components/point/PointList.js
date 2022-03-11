import React from "react";
import "./PointList.css";
import { Link } from "react-router-dom";
import Point from "./Point";

const PointList = ({ selectPointItem, pointItems, onPointClick }) => {
  return (
    // <Link to={`/point/view/${selectPointItem.id}`}>
    <table>
      <tr>
        <th>번호</th>
        <th>업체명</th>
        <th>연락처</th>

        <th>이메일</th>
        <th>포인트</th>
        <th>구분</th>
        <th>신청일</th>
        <th>상태변경일</th>
        <th>상태</th>
        <th>상태변경자</th>
      </tr>
      {pointItems.map((item) => {
        return <Point onPointClick={onPointClick} pointItem={item} />;
      })}
    </table>
    // </Link>
  );
};

export default PointList;
