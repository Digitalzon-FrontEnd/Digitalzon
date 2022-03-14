import React from "react";
import "./PointBoard.css";
import Gnb from "./../common/Gnb";
import Pagination from "./Pagination";
import PointList from "./PointList";
const PointBoard = ({ selectPointItem, pointItems, setSelectPointItem }) => {
  const onPointClick = (item) => {
    setSelectPointItem(item);
  };
  return (
    <div className="inner">
      <Gnb />

      <div className="point-board-box">
        <span className="point-board-select-box">
          <span className="input_date_box">
            <span className="input_date_title">일시</span>
            <input className="start-date" type="date" />
            <span className="between-char">~</span>
            <input className="end-date" type="date" />
            <span className="point-refund-select-box">구분</span>
          </span>
          <span className="select-wrap">
            <select name="status">
              <option value="none"> 선택 </option>
              <option value="korean">환불</option>

              <option value="chinese">환불신청</option>
              <option value="spanish">충전</option>
              <option value="spanish">환불완료</option>
            </select>
          </span>
          <span className="point-board-search-box">
            <input type="text" id="search-box" />
            <label for="search-box">검색</label>
          </span>
          <button id="search-btn" className="btn-o">
            검색
          </button>
        </span>
        <PointList
          selectPointItem={selectPointItem}
          pointItems={pointItems}
          onPointClick={onPointClick}
        />
        <Pagination itemsCount={50} pageSize={10} />
      </div>
    </div>
  );
};

export default PointBoard;
