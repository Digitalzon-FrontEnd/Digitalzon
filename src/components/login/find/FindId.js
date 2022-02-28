import React from "react";
import "./FindId.css";
import { Link } from "react-router-dom";

const FindId = () => {
  const $ = (selector) => {
    return document.querySelector(selector);
  };
  const emailcheck = (e) => {
    const checkValue = e.target.value;
    if (checkValue.includes("@") && checkValue.includes(".")) {
      $("#findIdNoAt").classList.add("trans");
    } else {
      $("#findIdNoAt").classList.remove("trans");
    }
  };
  return (
    <div className="inner">
      <h2 className="page-title">아이디 찾기</h2>
      <ul className="findId-form-area">
        <li>
          <label htmlFor="findIdUserEmail">이메일</label>
          <input
            id="findIdUserEmail"
            type="text"
            onKeyUp={emailcheck}
            autoFocus
          />
          <p className="warn">
            <span id="findIdNoAt" className="trans">
              잘못된 메일형식입니다.
            </span>
          </p>
        </li>
        <li>
          <label htmlFor="findIdUserName">사용자명</label>
          <input id="findIdUserName" type="text" />
        </li>
      </ul>
      <div className="findId-btn-box">
        <button className="findId-btn-id-send btn-r btn-o">아이디 발송</button>
        <button className="findId-btn-cancel btn-r btn-g">
          <Link to="/login">취소</Link>
        </button>
      </div>
    </div>
  );
};

export default FindId;
