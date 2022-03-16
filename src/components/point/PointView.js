import { React, useState } from "react";
import "./PointView.css";
import Gnb from "../common/Gnb";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const Point = ({ pointItems, setPointItems }) => {
  const params = useParams();
  const id = Number(params.id);
  const pointItem = pointItems.find((item) => {
    return item.id === id;
  });

  const [prevSelectedValue, setPrevSelectValue] = useState("");
  const [selectValue, setSelectValue] = useState("접수");
  const onSaveClick = () => {
    var now = moment();
    var date = now.format("YYYY-MM-DD HH:mm:ss");
    let recordText = "";

    if (prevSelectedValue === "") {
      recordText = `· ${date}  김주리님이 상태를  ${selectValue} 로 변경하였습니다. `;
    } else {
      recordText = `· ${date}  김주리님이 상태를 ${prevSelectedValue}에서 ${
        selectValue === "처리중" ? `${selectValue} 으로` : `${selectValue} 로`
      }   변경하였습니다. `;
    }

    setPointItems(
      pointItems.map((item) =>
        item.id === id
          ? {
              ...item,
              record: [recordText, ...item.record],
              status: selectValue,
              modifiedDate: now.format("YYYY.MM.DD"),
              modifiedBy: "관리자",
            }
          : item
      )
    );
  };

  const onSelectHandler = (e) => {
    setPrevSelectValue(selectValue);
    setSelectValue(e.target.value);
  };

  return (
    <div className="inner">
      <Gnb />
      <div className="pointDetails-box">
        <div className="point-details">
          <div className="point-details-inner">
            <div className="row">
              <span class="key">업체명</span>
              <span class="value">{pointItem.companyName}</span>
            </div>
            <div className="row">
              <span class="key">담당자명</span>
              <span class="value">{pointItem.managerName}</span>
            </div>
            <div className="row">
              <span class="key">연락처</span>
              <span class="value">{pointItem.phone}</span>
            </div>{" "}
            <div className="row">
              <span class="key">이메일</span>
              <span class="value">{pointItem.email}</span>
            </div>{" "}
            <div className="row">
              <span class="key">구분</span>
              <span class="value">{pointItem.division}</span>
            </div>{" "}
            <div className="row">
              <span class="key">포인트</span>
              <span class="value">{pointItem.pointAmount}</span>
            </div>
            <div className="row">
              <span class="key">계좌정보</span>
              <span class="value">
                기업은행 | 0000-0000-0000-00 | {pointItem.managerName}
              </span>
            </div>
          </div>{" "}
          <span className="point-details-select-menu">
            <span className="statusTitle">상태</span>
            <span className="select-wrap">
              <select
                name="status"
                onChange={(e) => {
                  onSelectHandler(e);
                }}
              >
                <option value="접수">접수</option>
                <option value="처리중">처리중</option>
                <option value="완료">완료</option>
              </select>
            </span>
            <button className="save-btn btn-o" onClick={onSaveClick}>
              저장
            </button>
            <Link to="/point/board">
              <button className="list-btn btn-o">목록</button>
            </Link>
          </span>
          <div className="status-record-container">
            <span className="status-record-title">[기록]</span>
            <ul className="record-list">
              {pointItem.record.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point;
