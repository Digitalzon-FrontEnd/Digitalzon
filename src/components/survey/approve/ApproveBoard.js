import { React } from "react";
import "./ApproveBoard.css";
import ApproveList from "./ApproveList";
import Gnb from "../../common/Gnb";
const ApproveBoard = ({ surveyApproveItems }) => {
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
        <ApproveList surveyApproveItems={surveyApproveItems} />
        {/* <Pagination itemsCount={50} pageSize={10} /> */}
      </div>
    </div>
  );
};

export default ApproveBoard;
