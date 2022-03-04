import React, { useState } from "react";
import "./SurveySendModal.css";

const SurveySendModal = ({ modalClose, post }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  const comma = (num) => {
    var len, point, str;

    num = num + "";
    point = num.length % 3;
    len = num.length;

    str = num.substring(0, point);
    while (point < len) {
      if (str !== "") str += ",";
      str += num.substring(point, point + 3);
      point += 3;
    }

    return str;
  };

  return (
    <div className="SurveySendModal-container" onClick={onCloseModal}>
      <div className="SurveySendModal-modal">
        <div className="SurveySendModal-top-box">
          <h2 className="SurveySendModal-title">설문 전송</h2>
          <div className="SurveySendModal-button" onClick={modalClose}>
            X
          </div>
        </div>
        <div className="SurveySendModal-phrases-box">
          <p className="SurveySendModal-phrases-1">설문을 발송하시겠습니까?</p>
          <p className="SurveySendModal-phrases-2">[ 설문 명세서 ]</p>
        </div>
        <div className="SurveySendModal-list-box">
          <ul className="SurveySendModal-list">
            <li>조사명 : {post.surveyName}</li>
            <li>설문링크 : {post.link}</li>
            <li>필요샘플 수 : {post.needSample}</li>
            <li>참여포인트 : {post.pointPerPerson} point</li>
            <li>설문기간 : {post.date}</li>
            <li>발송패널 수 : {post.completeSample} 건</li>
            <li>
              설문 프로파일 : <span>{post.profile1}</span>
              <span>{post.profile2}</span>
              <span>{post.profile3}</span>
            </li>
          </ul>
        </div>
        <h3 className="SurveySendModal-point-deduction">
          총 {comma(post.pointPerPerson * post.completeSample)} point가
          차감됩니다.
        </h3>
        <div className="SurveySendModal-footer-btn-box">
          <button
            className="SurveySendModal-btn btn-s btn-o"
            onClick={() => {
              alert("전송이 완료되었습니다.");
              modalClose();
            }}
          >
            확인
          </button>
          <button
            className="SurveySendModal-btn btn-s btn-o"
            onClick={modalClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};
export default SurveySendModal;
