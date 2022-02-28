import React from "react";
import "./FindPw.css";
import { Link } from "react-router-dom";

const FindPw = () => {
  const $ = (selector) => {
    return document.querySelector(selector);
  };
  const emailcheck = (e) => {
    const checkValue = e.target.value;
    if (checkValue.includes("@") && checkValue.includes(".")) {
      $("#findPwNoAt").classList.add("trans");
    } else {
      $("#findPwNoAt").classList.remove("trans");
    }
  };
  const lengthcheck = (e) => {
    const value = e.target.value;
    const length = e.target.maxLength;
    if (value.length === length) {
      $(`#findPwCellNum${length - 1}`).focus();
    }
  };
  return (
    <div className="inner">
      <h2 className="page-title">비밀번호 찾기</h2>
      <ul className="findPw-form-area">
        <li>
          <label htmlFor="findPwUserEmail">이메일</label>
          <input
            id="findPwUserEmail"
            type="text"
            onKeyUp={emailcheck}
            autoFocus
          />
          <p className="warn">
            <span id="findPwNoAt" className="trans">
              잘못된 메일형식입니다.
            </span>
          </p>
        </li>
        <li>
          <label htmlFor="findPwUserId">사용자명</label>
          <input id="findPwUserId" type="text" />
        </li>
        <li>
          <label htmlFor="findPwCellNum1">휴대폰번호</label>
          <div className="findPw-cellNum-box">
            <input
              id="findPwCellNum1"
              type="text"
              maxLength="3"
              onKeyUp={lengthcheck}
            />
            <input
              id="findPwCellNum2"
              type="text"
              maxLength="4"
              onKeyUp={lengthcheck}
            />
            <input id="findPwCellNum3" type="text" maxLength="4" />
            <button className="findPw-btn-send-certifyNum btn-s btn-o">
              인증번호 발송
            </button>
          </div>
        </li>
        <li>
          <label htmlFor="findPwCertifyNum">인증번호</label>
          <div className="findPw-certify-box">
            <input id="findPwCertifyNum" type="text" />
            <button className="findPw-btn-confirm btn-s btn-o">확인</button>
          </div>
        </li>
      </ul>
      <div className="findPw-btn-box">
        <button className="findPw-btn-id-send btn-r btn-o">
          임시 비밀번호 발송
        </button>
        <button className="findPw-btn-cancel btn-r btn-g">
          <Link to="/login">취소</Link>
        </button>
      </div>
    </div>
  );
};

export default FindPw;
