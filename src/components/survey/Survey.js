import React from "react";
import Pagination from "./Pagination";
import "./Survey.css";
import SurveyRow from "./SurveyRow";

const Survey = ({ posts, postsPerPage, totalPosts, paginate }) => {
  return (
    <div className="survey-box">
      <div className="inner-800">
        <div className="survey-top-box">
          <div className="survey-top-box-btnbox">
            <button className="survey-registration-btn  btn-o btn-r">
              신규등록
            </button>
            <button className="survey-send-btn  btn-o btn-r">발송</button>
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
                />
              );
            })}
          </tbody>
        </table>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Survey;
