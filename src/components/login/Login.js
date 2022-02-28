import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="inner">
      <h2 className="page-title">로그인</h2>
      <ul className="login-form-area">
        <li>
          <label htmlFor="loginUserId">아이디</label>
          <input id="loginUserId" type="text" autoFocus />
        </li>
        <li>
          <label htmlFor="loginUserPw">비밀번호</label>
          <input id="loginUserPw" type="password" />
        </li>
      </ul>
      <div className="login-btn-box">
        <button className="login-btn-log-in btn-r btn-o">로그인</button>
      </div>
      <ul className="login-link-box">
        <li>
          <Link to="/findId">아이디 찾기</Link>
        </li>
        <li>
          <Link to="/findPw">비밀번호 찾기</Link>
        </li>
        <li>
          <Link to="/signUp">회원가입</Link>
        </li>
      </ul>
      <button className="login-btn-panel-register btn-r btn-b">
        <Link to="/panel">패널인증시스템 신청하기</Link>
      </button>
    </div>
  );
};

export default Login;
