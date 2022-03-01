import React from "react";
const SurveyDetail = ({ location }) => {
  const params = location.state;
  return (
    <div className="survey-detail-box">
      <div className="inner-800">
        <h1>[{params.surveyName}]</h1>
        <h3>{params.date}</h3>
      </div>
    </div>
  );
};

export default SurveyDetail;
