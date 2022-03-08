import React,{useState} from "react";
import "./AccountManage.css";
import { Link } from "react-router-dom";
import dummy from '../../db/accountData.json'

const AccountManage = () => {
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

    var returnValue1 = dummy.userAccountData.find(function(data){return data.order === 1});
    console.log(returnValue1);
    var returnValue2 = dummy.userAccountData.find(function(data){return data.order === 2});
    console.log(returnValue2);

    let strArr = Object.values(dummy.userAccountData2);
    console.log(strArr)

    console.log(dummy.userAccountData[0].accountid)

    {/*const [inputText,setInputText] = useState("");
    const [nextOrder, setNextOrder] = useState(2);
    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextUser = dummy.userAccountData.concat({
            id: nextOrder,
            text: inputText,
        });
        setNextOrder(nextOrder + 1);
        setNames(nextUser);
        setInputText("");
    };*/}

    return (
    <div className="account-wrapper">
        <div className="account-inner">
            <div className="account-manege-info">
                <div className="account-step-box">
                    <Link to="/accountchange"><p className="account-step">계정변경</p></Link>
                    <Link to="/accountsetup"><p className="account-step">계정생성</p></Link>
                    <Link to="/accountmanage"><p className="account-step" id="accountStepEnter">계정관리</p></Link>
                </div>
                <div className="manage-box">
                    <div className="account-manage-list">
                        <div className="search-box">
                            <input id="searchBox"></input>
                            <button id="searchIcon">돋보기</button>
                        </div>
                        <ul className="name-list">
                            {dummy.userAccountData.map((userinfo)=>(
                                <li key={userinfo.userinfo}>{userinfo.userinfo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="account-manage-info">
                        <div className="account-id">
                            <label>아이디</label>
                            
                            <input className=" account-input" defaultValue="아이디"></input>
                        </div>
                        <div className="account-password">
                            <label>비밀번호</label>
                            <input type="text" className=" account-input"></input>
                        </div>
                        <div className="account-email">
                            <label>E-Mail</label>
                            <input type="email" className=" account-input"></input>
                        </div>
                        <div className="account-username">
                            <label>사용자명</label>
                            <input className=" account-input"></input>
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
                    </div>
                </div>
            </div>
            <div className="account-btn-box">
                <button className="account-manage-btn" id="accountDelBtn">삭제</button>
                <button className="account-manage-btn">저장</button>
            </div>
            </div>
    </div>
    );
};

export default AccountManage;