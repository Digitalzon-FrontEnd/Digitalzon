import React from "react";
import Approve from "./Approve";

const ApproveList = ({ surveyApproveItems }) => {
  return (
    <table>
      <tr>
        <th>번호</th>
        <th>조사명</th>
        <th>조사요청기간</th>
        <th>필요샘플 수</th>

        <th>완료샘플 수</th>
        <th>상태</th>
        <th>상태변경일</th>
        <th>상태변경자</th>
        <th>소속</th>
      </tr>
      {surveyApproveItems.map((item) => {
        return <Approve post={item} key={item.num}/>;
      })}
    </table>
  );
};

export default ApproveList;
