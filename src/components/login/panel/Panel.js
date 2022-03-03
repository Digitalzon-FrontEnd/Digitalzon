import React from "react";
import "./Panel.css";
import { Link } from "react-router-dom";

const Panel = () => {
  const $ = (selector) => {
    return document.querySelector(selector);
  };
  const emailcheck = (e) => {
    const checkValue = e.target.value;
    if (checkValue.includes("@") && checkValue.includes(".")) {
      $("#panelNoAt").classList.add("trans");
    } else {
      $("#panelNoAt").classList.remove("trans");
    }
  };
  const alertComplete = () => {
    alert("패널인증시스템 신청이 완료되었습니다.");
  }
  return (
    <div className="panel-box">
      <div className="inner">
        <h2 className="page-title">패널인증시스템 신청</h2>
        <p className="panel-page-des">
          도입 관련하여 궁금하신 점을 <br />
          아래에 작성해주시면 최대한 빠른 시간 내<br />
          담당자가 연락 드리도록 하겠습니다.
        </p>
        <form className="panel-form-area" action="/" onSubmit={alertComplete}>
          <ul className="panel-form-list">
            <li>
              <label htmlFor="panelUserCorpName">업체명</label>
              <input id="panelUserCorpName" type="text" autoFocus required />
            </li>
            <li>
              <label htmlFor="panelUserName">담당자명</label>
              <input id="panelUserName" type="text" required />
            </li>
            <li>
              <label htmlFor="panelUserCellNum">연락처</label>
              <input id="panelUserCellNum" type="number" required />
            </li>
            <li>
              <label htmlFor="panelUserEmail">이메일</label>
              <input id="panelUserEmail" type="email" onKeyUp={emailcheck} required />
              <p className="warn">
                <span id="panelNoAt" className="trans">
                  잘못된 메일형식입니다.
                </span>
              </p>
            </li>
            <li>
              <label htmlFor="panelReqContents">신청/문의내용</label>
              <textarea id="panelReqContents" wrap="keep-all" required/>
            </li>
          </ul>
          <div className="panel-btn-box">
            <button className="panel-btn-panel-req btn-r btn-o" type="submit">문의신청</button>
            <Link to="/login">
              <button className="panel-btn-cancel btn-r btn-g" type="button">
                취소
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Panel;
