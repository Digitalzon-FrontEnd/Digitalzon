import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "./SurveyChart.css";

function SurveyChart({ needSample, completeSample }) {
  Chart.register(ArcElement);
  const perData = ((completeSample / needSample) * 100).toFixed(2);
  const data = {
    labels: ["응답미완료", "응답완료"],
    datasets: [
      {
        label: "질문지 현황",
        data: [perData, 100 - perData],
        backgroundColor: ["rgba(255, 222, 89)", "rgba(176, 194, 77)"],
        borderColor: ["rgba(255, 222, 89)", "rgba(176, 194, 77)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="survey-chart-box">
      <div className="survey-chart-postion-box">
        <Doughnut data={data} />
      </div>
      <div className="survey-chart-text-box">
        <span className="survey-chart-text1">
          {`${data.datasets[0].data[0]}%`} 응답완료
        </span>
        <span className="survey-chart-text2">
          {`${data.datasets[0].data[1]}%`} 응답 미완료
        </span>
      </div>
    </div>
  );
}
export default SurveyChart;
