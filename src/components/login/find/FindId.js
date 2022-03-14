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
  const alertSendID = () => {
    alert("입력하신 이메일로 아이디가 발송되었습니다.");
  }
  return (
    <div className="findId-box">
      <div className="inner">
        <h2 className="page-title">아이디 찾기</h2>
        <form className="findId-form-area" action="/login" onSubmit={alertSendID}>
          <ul className="findId-form-list">
            <li>
              <label htmlFor="findIdUserEmail">이메일</label>
              <input
                id="findIdUserEmail"
                type="email"
                onKeyUp={emailcheck}
                autoFocus
                required
              />
              <p className="warn">
                <span id="findIdNoAt" className="trans">
                  잘못된 메일형식입니다.
                </span>
              </p>
            </li>
            <li>
              <label htmlFor="findIdUserName">사용자명</label>
              <input id="findIdUserName" type="text" required />
            </li>
          </ul>
          <div className="findId-btn-box">
            <button className="findId-btn-id-send btn-r btn-o" type="submit">아이디 발송</button>
            <Link to="/login">
              <button className="findId-btn-cancel btn-r btn-g" type="button">취소</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindId;
