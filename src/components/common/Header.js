import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({user, point}) => {
  return (
    <header>
      <div className="header-box">
        <div className="logo">
          <Link to="/">
            <img
              className="header_logo"
              src="img/CI-Digitalzone.png"
              alt="디지털존 로고"
            />
          </Link>
        </div>
        <nav className="info-nav">
          <ul className={user.login === false ? '' : 'user-login'}>
            {user.login === false ? 
            <li>
              <Link to="/guide">
                <img
                  className="header-info"
                  src="img/ant-design-customer-service-filled.png"
                  alt="고객상담"
                />
              </Link>
            </li>
            : null }
            {user.login === false ? 
            <li className="faq">
            <Link to="/faq">FAQ</Link>
            </li>
            : <li className="point">
              <Link to="/managepoint">{point}point</Link>
              </li> }
            {user.login === false ? 
            <li className="login">
              <Link to="/login">로그인</Link>
            </li>
            : <li className="logout">로그아웃</li>}
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
