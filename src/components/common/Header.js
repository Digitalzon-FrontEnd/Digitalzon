import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <Link to="/">
          <div className="logo">
            <img
              className="header_logo"
              src="img/CI-Digitalzone.png"
              alt="디지털존 로고"
            />
          </div>
        </Link>
        <nav className="info-nav">
          <ul>
            <li>
              <Link to="/guide">
                <img
                  className="header-info"
                  src="img/ant-design-customer-service-filled.png"
                  alt="고객상담"
                />
              </Link>
            </li>

            <li className="faq">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="login">
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
