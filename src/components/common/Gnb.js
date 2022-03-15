import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./Gnb.css";
const Gnb = ({ user }) => {
  user = true;
  const sampleLocation = useLocation();
  const url = sampleLocation.pathname;
  const [ isClick, setClick ] = useState('active')
  const tabClick = () => {
    setClick('active')
  }
  return (
    <nav className="menu-nav">
      {user ? (
        /* 로그인 시 Gnb 홈 화면은 로그인 비로그인  다름 */
        <ul>
          <li className={ isClick ? 'active' : ''} onClick={tabClick}>
            <Link to="/home">홈</Link>
          </li>
          <li className={ isClick ? 'active' : ''}>
            <Link to="/guide">이용안내</Link>
          </li>
          <li className={ isClick ? 'active' : ''}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li className={ isClick ? 'active' : ''}>
            <Link to="/mainqa">Q&amp;A</Link>
          </li>
          <li className={ isClick ? 'active' : ''}>
            <Link to="/mypage">계정설정</Link>
          </li>
          <li className={ isClick ? 'active' : ''}>
            <Link to="/survey">설문등록/현황조회</Link>
          </li>
          <li className={ isClick ? 'active' : ''}>
            <Link to="/managepoint">포인트 관리</Link>
          </li>
          <li className={ isClick ? 'active total-manege-box' : 'total-manege-box'}>
            통합관리 
            <ul className="total-manege-list">
              <li><Link to="/panel/board">패널시스템 신청현황</Link></li>
              <li><Link to="/point/board">포인트 현황</Link></li>
              <li><Link to="/survey/approve/board">설문승인 현황</Link></li>
            </ul>
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
