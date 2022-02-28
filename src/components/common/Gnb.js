import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Gnb.css";
const Gnb = ({ user }) => {
  const sampleLocation = useLocation();
  const url = sampleLocation.pathname;
  console.log(url);
  return (
    <nav className="menu-nav ">
      {user ? (
        /* 로그인 시 Gnb 홈 화면은 로그인 비로그인  다름 */
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/guide">이용안내</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/">Q&A</Link>
          </li>
          <li>
            <Link to="/">계정설정</Link>
          </li>
          <li>
            <Link to="/">설문등록/현황조회</Link>
          </li>
          <li>
            <Link to="/">포인트 관리</Link>
          </li>
          <li>
            <Link to="/">통합관리</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className={url === "/" ? "on" : null}>
            <Link to="/">홈</Link>
          </li>
          <li className={url === "/guide" ? "on" : null}>
            <Link to="/guide">이용안내</Link>
          </li>
          <li className={url === "/faq" ? "on" : null}>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Gnb;
