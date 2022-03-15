import { React, useState } from "react";
import "./ApproveBoard.css";
import ApproveList from "./ApproveList";
import Gnb from "../../common/Gnb";
import Pagination from "../../common/Pagination";
const ApproveBoard = ({ surveyApproveItems }) => {
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

      <div className="approve-board-box">
        <div className="approve-board-select-box">
          <span className="approve-board-search-box">
            <input type="text" id="search-box" />
            <label for="search-box">검색</label>
          </span>
          <button id="search-btn" className="btn-o">
            검색
          </button>
        </div>
        <ApproveList surveyApproveItems={currentPosts(surveyApproveItems)} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={surveyApproveItems.length}
          paginate={setCurrentPage}
          // setIndex={setIndex}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ApproveBoard;
