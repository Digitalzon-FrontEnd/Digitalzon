import React from "react";
import { Link } from "react-router-dom";
import "./SurveyRow.css";
const SurveyRow = ({
  num,
  surveyName,
  date,
  needSample,
  completeSample,
  state,
  registrant,
  affiliation,
  activation,
  setIndex,
}) => {
  return (
    <tr className={activation ? "survey-row-on" : "survey-row-off"}>
      <td>
        <input
          type="radio"
          className="survey-row-radio"
          name="survey-row-radio"
          onClick={(e) => {
            if (!activation) {
              alert("승인이 완료된 설문만 발송 할 수 있습니다.");
              e.preventDefault();
            } else {
              setIndex(Number(e.target.parentElement.nextSibling.innerText));
            }
          }}
        />
      </td>
      <td>{num}</td>
      <td>
        <Link
          to={{
            pathname: `/survey/SurveyDetail/${num}`,
            state: {
              num: num,
              date: date,
              surveyName: surveyName,
              needSample: needSample,
              completeSample: completeSample,
              state: state,
              registrant: registrant,
              affiliation: affiliation,
            },
          }}
        >
          {surveyName}
        </Link>
      </td>
      <td>{date}</td>
      <td>{needSample}</td>
      <td>{completeSample}</td>
      <td>{state}</td>
      <td>{registrant}</td>
      <td>{affiliation}</td>
    </tr>
  );
};

export default SurveyRow;
