<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
=======
import React, { useState } from "react";
// import Pagination from "./Pagination";
>>>>>>> 7710ac486e1d18d9b7335d89298cf79e266b52b1
import "./Survey.css";
import SurveyRow from "./SurveyRow";
import SurveySendModal from "./SurveySendModal";
import Pagination from "../common/Pagination";
import Modal from "../common/Modal";
const Survey = ({
  totalIndexPosts,
  posts,
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const [surveyModalOpen, surveySetModalOpen] = useState(false);
  const modalClose = () => {
    surveySetModalOpen(!surveyModalOpen);
  };
  const [index, setIndex] = useState(null);

  const checkIndexFnc = (index) => {
    if (index == null) {
      alert("설문을 선택 해주세요.");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="survey-box">
      <div className="inner-800">
        {surveyModalOpen && (
          <Modal
            modalClose={modalClose}
            post={totalIndexPosts[totalIndexPosts.length - index]}
            component="SurveySendModal"
          />
        )}
        <div className="survey-top-box">
          <div className="survey-top-box-btnbox">
            <Link to="/surveyregist">
            <button className="survey-registration-btn  btn-o btn-r">
              신규등록
            </button>
<<<<<<< HEAD
            </Link>
            <button className="survey-send-btn  btn-o btn-r">발송</button>
=======
            <button
              className="survey-send-btn  btn-o btn-r"
              onClick={(e) => {
                if (checkIndexFnc(index)) {
                  surveySetModalOpen(true);
                }
              }}
            >
              발송
            </button>
>>>>>>> 7710ac486e1d18d9b7335d89298cf79e266b52b1
          </div>
          <div className="survey-input-box">
            <input type="text" className="survey-input" />
            <button className="survey-input-btn">
              <img src="/img/mdi-magnify.png" alt="검색버튼" />
            </button>
          </div>
        </div>
        <table className="survey-table">
          <thead className="survey-table-thead">
            <tr>
              <th>선택</th>
              <th>번호</th>
              <th>조사명</th>
              <th>요청기간</th>
              <th>필요샘플 수</th>
              <th>완료샘플 수</th>
              <th>상태</th>
              <th>등록자</th>
              <th>소속</th>
            </tr>
          </thead>
          <tbody className="survey-table-tbody">
            {posts.map((data) => {
              return (
                <SurveyRow
                  key={data.num}
                  num={data.num}
                  surveyName={data.surveyName}
                  date={data.date}
                  needSample={data.needSample}
                  completeSample={data.completeSample}
                  state={data.state}
                  registrant={data.registrant}
                  affiliation={data.affiliation}
                  activation={data.activation}
                  setIndex={setIndex}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
};

export default Survey;
