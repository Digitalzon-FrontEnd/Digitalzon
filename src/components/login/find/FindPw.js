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
  const alertSendCertNum = () => {
    alert("인증번호가 발송되었습니다.");
  }
  const alertSendPw = () => {
    alert("입력하신 이메일로 임시 비밀번호가 발송되었습니다.");
  }
  return (
    <div className="inner">
      <h2 className="page-title">비밀번호 찾기</h2>
      <form className="findPw-form-area" action="/login" onSubmit={alertSendPw}>
        <ul className="findPw-form-list">
          <li>
            <label htmlFor="findPwUserEmail">이메일</label>
            <input
              id="findPwUserEmail"
              type="email"
              onKeyUp={emailcheck}
              autoFocus
              required
            />
            <p className="warn">
              <span id="findPwNoAt" className="trans">
                잘못된 메일형식입니다.
              </span>
            </p>
          </li>
          <li>
            <label htmlFor="findPwUserId">사용자명</label>
            <input id="findPwUserId" type="text" required />
          </li>
          <li>
            <label htmlFor="findPwCellNum1">휴대폰번호</label>
            <div className="findPw-cellNum-box">
              <input
                id="findPwCellNum1"
                type="number"
                maxLength="3"
                onKeyUp={lengthcheck}
                required
              />
              <input
                id="findPwCellNum2"
                type="number"
                maxLength="4"
                onKeyUp={lengthcheck}
                required
              />
              <input id="findPwCellNum3" type="number" maxLength="4" />
              <button className="findPw-btn-send-certifyNum btn-s btn-o" type="button" onClick={alertSendCertNum}>
                인증번호 발송
              </button>
            </div>
          </li>
          <li>
            <label htmlFor="findPwCertifyNum">인증번호</label>
            <div className="findPw-certify-box">
              <input id="findPwCertifyNum" type="text" required />
              <button className="findPw-btn-confirm btn-s btn-o" type="button">확인</button>
            </div>
          </li>
        </ul>
        <div className="findPw-btn-box">
          <button className="findPw-btn-id-send btn-r btn-o" type="submit">
            임시 비밀번호 발송
          </button>
          <Link to="/login">
            <button className="findPw-btn-cancel btn-r btn-g" type="button">
              취소
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FindPw;
