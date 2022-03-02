import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="inner">
      <h2 className="page-title">로그인</h2>
      <form className="login-form-area" action="/">
        <ul className="login-form-list">
          <li>
            <label htmlFor="loginUserId">아이디</label>
            <input id="loginUserId" type="text" autoFocus required />
          </li>
          <li>
            <label htmlFor="loginUserPw">비밀번호</label>
            <input id="loginUserPw" type="password" required />
          </li>
        </ul>
        <div className="login-btn-box">
          <button className="login-btn-log-in btn-r btn-o" type="submit">로그인</button>
        </div>
      </form>
      <ul className="login-link-box">
        <li>
          <Link to="/findId">아이디 찾기</Link>
        </li>
        <li>
          <Link to="/findPw">비밀번호 찾기</Link>
        </li>
        <li>
          <Link to="/terms">회원가입</Link>
        </li>
      </ul>
      <Link to="/panel">
        <div className="login-btn-panelBox">
          <button className="login-btn-panel-register btn-r btn-b">
            패널인증시스템 신청하기
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Login;
