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
  return (
    <div className="inner">
      <h2 className="page-title">패널인증시스템 신청</h2>
      <p className="panel-page-des">
        도입 관련하여 궁금하신 점을 <br />
        아래에 작성해주시면 최대한 빠른 시간 내<br />
        담당자가 연락 드리도록 하겠습니다.
      </p>
      <ul className="panel-form-area">
        <li>
          <label htmlFor="panelUserCorpName">업체명</label>
          <input id="panelUserCorpName" type="text" autoFocus />
        </li>
        <li>
          <label htmlFor="panelUserName">담당자명</label>
          <input id="panelUserName" type="text" />
        </li>
        <li>
          <label htmlFor="panelUserCellNum">연락처</label>
          <input id="panelUserCellNum" type="text" />
        </li>
        <li>
          <label htmlFor="panelUserEmail">이메일</label>
          <input id="panelUserEmail" type="text" onKeyUp={emailcheck} />
          <p className="warn">
            <span id="panelNoAt" className="trans">
              잘못된 메일형식입니다.
            </span>
          </p>
        </li>
        <li>
          <label htmlFor="panelReqContents">신청/문의내용</label>
          <textarea id="panelReqContents" wrap="keep-all" />
        </li>
      </ul>
      <div className="panel-btn-box">
        <button className="panel-btn-panel-req btn-r btn-o">문의신청</button>
        <button className="panel-btn-cancel btn-r btn-g">
          <Link to="/login">취소</Link>
        </button>
      </div>
    </div>
  );
};

export default Panel;
