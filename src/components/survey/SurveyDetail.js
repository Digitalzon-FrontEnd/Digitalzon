import React from "react";
import Profile from "./Profile";
import SurveyChart from "./SurveyChart";
import "./SurveyDetail.css";

const SurveyDetail = ({ location }) => {
  const params = location.state;
  console.log(params);
  return (
    <div className="survey-detail-box">
      <div className="inner-800">
        <h1 className="survey-detail-title">[{params.surveyName}]</h1>
        <h3 className="survey-detail-date">{params.date}</h3>
        <div className="survey-detail-situation-matching-box">
          <div className="survey-detail-situation-box">
            <h4 className="survey-detail-contentbox-title">설문지 현황</h4>
            <div className="survey-detail-contentbox">
              <div className="survey-detail-contentbox-text-box">
                <p className="survey-detail-contentbox-text-row">
                  필요설문
                  <span className="survey-detail-text-bold">
                    {params.needSample}
                  </span>
                  건
                </p>
                <p className="survey-detail-contentbox-text-row">
                  응답완료
                  <span className="survey-detail-text-bold">
                    {params.completeSample}
                  </span>
                  건
                </p>
                <p className="survey-detail-contentbox-text-row">
                  응답미완료
                  <span className="survey-detail-text-bold">
                    {params.needSample - params.completeSample}
                  </span>
                  건
                </p>
              </div>
              <SurveyChart
                needSample={params.needSample}
                completeSample={params.completeSample}
              />
            </div>
          </div>
          <div className="survey-detail-matching-box">
            <h4 className="survey-detail-contentbox-title">매칭 현황</h4>
            <div className="survey-detail-contentbox">
              <div className="survey-detail-contentbox-text-box">
                <p className="survey-detail-contentbox-text-row">
                  매칭발송
                  <span className="survey-detail-text-bold">
                    {params.needSample}
                  </span>
                  건
                </p>
                <p className="survey-detail-contentbox-text-row">
                  매칭성공
                  <span className="survey-detail-text-bold">
                    {params.completeSample}
                  </span>
                  건
                </p>
                <p className="survey-detail-contentbox-text-row">
                  매칭실패
                  <span className="survey-detail-text-bold">
                    {params.needSample - params.completeSample}
                  </span>
                  건
                </p>
              </div>
              <SurveyChart
                needSample={params.needSample}
                completeSample={params.completeSample}
              />
            </div>
          </div>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default SurveyDetail;
