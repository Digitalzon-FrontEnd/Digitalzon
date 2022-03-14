import React, { useState } from "react";
import "./AccountSetup.css";
import { Link } from "react-router-dom";
import Gnb from "../common/Gnb";


const AccountSetup = ({handleCreate, setUserList}) => {
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
    /* 전화번호 3칸 & 자동넘어감 함수 */
    
    const onChangeId = (e) => {
        setAccountId(e.target.value)
    }
    const onChangePw = (e) => {
        setAccountPw(e.target.value)
    }
    const onChangeEmail = (e) => {
        setAccountEmail(e.target.value)
    }
    const onChangeUser = (e) => {
        setAccountUser(e.target.value)
    }
    const onChangeCallNum1 = (e) => {
        setAccountCallNum1(e.target.value)
    }
    const onChangeCallNum2 = (e) => {
        setAccountCallNum2(e.target.value)
    }
    const onChangeCallNum3 = (e) => {
        setAccountCallNum3(e.target.value)
    }
    /* onchange 함수 */

    const submitAccount = (e) => {
        e.preventDefault();
        handleCreate(accountId,accountPw,accountEmail,accountUser,accountCallNum1,accountCallNum2,accountCallNum3)
        setAccountId('')
        setAccountPw('')
        setAccountEmail('')
        setAccountUser('')
        setAccountCallNum1('')
        setAccountCallNum2('')
        setAccountCallNum3('')
    }
    /* 저장 btn */
    const [ accountId, setAccountId ] = useState('')
    const [ accountPw, setAccountPw ] = useState('')
    const [ accountEmail, setAccountEmail ] = useState('')
    const [ accountUser, setAccountUser ] = useState('')
    const [ accountCallNum1, setAccountCallNum1 ] = useState('')
    const [ accountCallNum2, setAccountCallNum2 ] = useState('')
    const [ accountCallNum3, setAccountCallNum3 ] = useState('')
   /* state  */


    return (
        <div>
            <Gnb />
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
                                <input type="id" value={accountId} onChange={onChangeId} className="account-input" required></input>
                            </div>
                            <div className="account-password">
                                <label>비밀번호</label>
                                <input type="password" value={accountPw} onChange={onChangePw} className=" account-input" required></input>
                            </div>
                            <div className="account-email">
                                <label>E-Mail</label>
                                <input type="email" value={accountEmail} onChange={onChangeEmail} className=" account-input" required></input>
                            </div>
                            <div className="account-username">
                                <label>사용자명</label>
                                <input value={accountUser} onChange={onChangeUser}className=" account-input" required></input>
                            </div>
                            <div className="account-call">
                                <label>휴대폰 번호</label>
                                <input
                                id="accountCallNum1"
                                type="number"
                                minLength="1"
                                maxLength="3"
                                onKeyUp={lengthcheck}
                                required
                                className=" account-input"
                                value={accountCallNum1} onChange={onChangeCallNum1}
                                />
                                <input
                                id="accountCallNum2"
                                type="number"
                                maxLength="4"
                                onKeyUp={lengthcheck}
                                required
                                className=" account-input"
                                value={accountCallNum2} onChange={onChangeCallNum2}
                                />
                                <input id="accountCallNum3"
                                type="number"
                                maxLength="4"
                                className=" account-input"
                                value={accountCallNum3} onChange={onChangeCallNum3}
                                />
                            </div>
                            <button id="accountIdBtn" type="button" required>중복확인</button>
                        </div>
                        <div className="account-btn-box">
                            <button className="account-btn" onClick={submitAccount} type="submit">저장</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AccountSetup;