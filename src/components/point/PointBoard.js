import React, { useState } from "react";
import "./PointBoard.css";
import Gnb from "./../common/Gnb";
import PointList from "./PointList";
import Pagination from "./../common/Pagination";
const PointBoard = ({ pointItems, setSelectPointItem }) => {
  const onPointClick = (item) => {
    setSelectPointItem(item);
  };

  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const postsPerPage = 5; //한 페이지에 글 갯수

  const indexOfLast = currentPage * postsPerPage; // 페이지를 글 갯수만큼 곱해서 보여준게 마지막 페이지넘버
  const indexOfFirst = indexOfLast - postsPerPage; // 마지막페이지 넘버 - 한 페이지의 글 갯수 = 첫번째 페이지 넘버

  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

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
          pointItems={currentPosts(pointItems)}
          onPointClick={onPointClick}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={pointItems.length}
          paginate={setCurrentPage}
          // setIndex={setIndex}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PointBoard;
