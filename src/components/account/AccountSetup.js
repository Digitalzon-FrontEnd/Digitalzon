import React, { useState } from "react";
import "./AccountSetup.css";
import { Link } from "react-router-dom";


const AccountSetup = () => {
    const $ = (selector) => {
        return document.querySelector(selector);
    };
    const lengthcheck = (e) => {
        const value = e.target.value;
        const length = e.target.maxLength;
        if (value.length === length) {
        $(`#accountCallNum${length - 1}`).focus();
        }
    };


    return (
    <div className="account-wrapper">
        <div className="account-inner">
            <div className="account-step-box">
                <Link to="/accountchange"><p className="account-step">계정변경</p></Link>
                <Link to="/accountsetup"><p className="account-step"  id="accountStepEnter">계정생성</p></Link>
                <Link to="/accountmanage"><p className="account-step">계정관리</p></Link>
            </div>
            <form action="/accountsetup">
                <div className="account-change-info">
                    <div className="account-id">
                        <label>아이디</label>
                        <input type="id" className="account-input" required></input>
                    </div>
                    <div className="account-password">
                        <label>비밀번호</label>
                        <input type="password" className=" account-input" required></input>
                    </div>
                    <div className="account-email">
                        <label>E-Mail</label>
                        <input type="email" className=" account-input" required></input>
                    </div>
                    <div className="account-username">
                        <label>사용자명</label>
                        <input className=" account-input" required></input>
                    </div>
                    <div className="account-call">
                        <label>휴대폰 번호</label>
                        <input
                        id="accountCallNum1"
                        type="text"
                        maxLength="3"
                        onKeyUp={lengthcheck}
                        required
                        className=" account-input"
                        />
                        <input
                        id="accountCallNum2"
                        type="text"
                        maxLength="4"
                        onKeyUp={lengthcheck}
                        required
                        className=" account-input"
                        />
                        <input id="accountCallNum3"
                        type="text"
                        maxLength="4"
                        className=" account-input"
                        />
                    </div>
                    <button id="accountIdBtn" type="button">중복확인</button>
                </div>
                <div className="account-btn-box">
                    <button className="account-btn" type="submit">저장</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AccountSetup;