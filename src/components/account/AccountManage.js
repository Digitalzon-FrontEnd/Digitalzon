import React, { useRef, useState } from "react";
import "./AccountManage.css";
import { Link } from "react-router-dom";
import Gnb from "../common/Gnb";

const AccountManage = ({ userList, setUserList }) => {
    const [userId, setUserId] = useState("");

    const currentUserId = useRef();
    const currentPw = useRef();
    const currentEmail = useRef();
    const currentUsername = useRef();
    const currentPhone1 = useRef();
    const currentPhone2 = useRef();
    const currentPhone3 = useRef();
    // useRef 사용해서 current 잡아주기

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
    // 핸드폰번호 글자수&자동넘김 함수
    const [userData, setUserData] = useState({
        id: "",
        accountid: "",
        accountpw: "",
        mail: "",
        username: "",
        usercall1: "",
        usercall2: "",
        usercall3: "",
    });
    // 기본 상태=>유저정보 불러오는 상태

    const removeBtn = (e) => {
        e.preventDefault();
        const copyList = [...userList];
        const filterList = copyList.filter((item) => item.id !== userId);
        setUserList(filterList);
        currentUserId.current.value = "";
        currentPw.current.value = "";
        currentEmail.current.value = "";
        currentUsername.current.value = "";
        currentPhone1.current.value = "";
        currentPhone2.current.value = "";
        currentPhone3.current.value = "";
    };
    // 삭제버튼 누르면 삭제되고 인풋값 비워지는 함수

    function click(id) {
        return new Promise(function (resolve, reject) {
            setUserId(Number(id));
            for (let x of userList) {
                if (x.id === Number(id)) {
                currentUserId.current.value = x.accountid;
                currentPw.current.value = x.accountpw;
                currentEmail.current.value = x.mail;
                currentUsername.current.value = x.username;
                currentPhone1.current.value = x.usercall1;
                currentPhone2.current.value = x.usercall2;
                currentPhone3.current.value = x.usercall3;
                }
            }
        });
    }
    // 좌측 유저리스트의 유저 클릭시 값 물어오는 함수
    
    const changeBtn = () => {
        const copyList = [...userList];
        copyList.splice(userId, 1, {
        ...userData,
        userco: userList[userId].userco,
        userinfo: userList[userId].userinfo,
        });
        setUserList(copyList);
    };
    // 변경사항 저장하는 함수

    const onChange = () => {
        setUserData({
        id: userId,
        accountid: currentUserId.current.value,
        accountpw: currentPw.current.value,
        mail: currentEmail.current.value,
        username: currentUsername.current.value,
        usercall1: currentPhone1.current.value,
        usercall2: currentPhone2.current.value,
        usercall3: currentPhone3.current.value,
        });
    };
    // 인풋 상태값 변화 확인 함수
    return (
        <div>
            <Gnb />
            <div className="account-wrapper">
                <div className="account-inner">
                    <form>
                    <div className="account-manage-info">
                        <div className="account-step-box">
                        <Link to="/accountchange">
                            <p className="account-step">계정변경</p>
                        </Link>
                        <Link to="/accountsetup">
                            <p className="account-step">계정생성</p>
                        </Link>
                        <Link to="/accountmanage">
                            <p className="account-step" id="accountStepEnter">
                            계정관리
                            </p>
                        </Link>
                        </div>
                        <div className="manage-box">
                        <div className="account-manage-list">
                            <div className="search-box">
                            <input id="searchBox"></input>
                            <button id="searchIcon">돋보기</button>
                            </div>
                            <ul className="name-list">
                            {userList.map((userinfo) => (
                                <li onClick={() => { click(userinfo.id); }} key={userinfo.userid}>
                                {userinfo.userco}&nbsp;{userinfo.username}
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="account-info-area" id="clickForm">
                            <div className="account-id">
                            <label>아이디</label>
                            <input
                                className=" account-input"
                                ref={currentUserId}
                                name="accountid"
                                onChange={onChange}
                                //value,defaultValue로 넣어주면 input값 변경되지않음 ref 사용해서 변경
                            ></input>
                            </div>
                            <div className="account-password">
                            <label>비밀번호</label>
                            <input
                                type="text"
                                className=" account-input"
                                ref={currentPw}
                                name="accountpw"
                            ></input>
                            </div>
                            <div className="account-email">
                            <label>E-Mail</label>
                            <input
                                type="email"
                                className=" account-input"
                                ref={currentEmail}
                                name="mail"
                                onChange={onChange}
                            ></input>
                            </div>
                            <div className="account-username">
                            <label>사용자명</label>
                            <input
                                className=" account-input"
                                ref={currentUsername}
                                name="username"
                                onChange={onChange}
                            ></input>
                            </div>
                            <div className="account-call">
                                <label>휴대폰 번호</label>
                                <input
                                    id="accountCallNum1"
                                    type="number"
                                    maxLength="3"
                                    onKeyUp={lengthcheck}
                                    ref={currentPhone1}
                                    required
                                    className=" account-input"
                                    onChange={onChange}
                                    name="usercall1"
                                />
                                <input
                                    id="accountCallNum2"
                                    type="number"
                                    maxLength="4"
                                    ref={currentPhone2}
                                    onKeyUp={lengthcheck}
                                    required
                                    className=" account-input"
                                    onChange={onChange}
                                    name="usercall2"
                                />
                                <input
                                    id="accountCallNum3"
                                    type="number"
                                    onChange={onChange}
                                    maxLength="4"
                                    ref={currentPhone3}
                                    className=" account-input"
                                    name="usercall3"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="account-btn-box">
                        <button
                        className="account-manage-btn"
                        id="accountDelBtn"
                        onClick={removeBtn}
                        >
                        삭제
                        </button>
                        <button
                        type="button"
                        className="account-manage-btn"
                        onClick={changeBtn}
                        >
                        저장
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );    
};

export default AccountManage;
