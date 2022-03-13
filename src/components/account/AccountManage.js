import React,{useState } from "react";
import "./AccountManage.css";
import { Link } from "react-router-dom";


const AccountManage = ({userList}) => {
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

    const [userData,setUserData]  = useState({
        accountid:'',
        accountpw:'',
        mail:'',
        userid:'',
        usercall1:'',
        usercall2:'',
        usercall3:'' 
    })
    //기본 상태=>유저정보 불러오는 상태



    
    const click = (userInfo) => {
        setUserData(userInfo);
    };
    //리스트 명단 클릭시 정보 불러옴

    const onChange = (e) => {
        const {name,value}=e.target;
        setUserData({
            ...userData,
            [name] : value,
        })
    }; //input onChange에 걸 함수
    
    return (
    <div className="account-wrapper">
        <div className="account-inner">
            <form onSubmit={function(e){
                e.preventDefault();
            }}>
                <div className="account-manage-info">
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
                                {userList.map((userinfo) => (
                                    <li
                                    onClick={() => {
                                        click(userinfo);
                                    }}
                                    key={userinfo.userid}
                                    >
                                    {userinfo.userinfo}
                                    </li>
                                ))}{''}
                                </ul>
                        </div>
                        <div className="account-info-area" id="clickForm">
                            <div className="account-id">
                                <label>아이디</label>
                                <input className=" account-input" defaultValue={userData.accountid} name='accountid'></input>
                            </div>
                            <div className="account-password">
                                <label>비밀번호</label>
                                <input type="text" className=" account-input" defaultValue={userData.accountpw} name='accountpw'></input>
                            </div>
                            <div className="account-email">
                                <label>E-Mail</label>
                                <input type="email" className=" account-input" defaultValue={userData.mail} name='mail'></input>
                            </div>
                            <div className="account-username">
                                <label>사용자명</label>
                                <input className=" account-input" defaultValue={userData.userid} name='userid'></input>
                            </div>
                            <div className="account-call">
                                <label>휴대폰 번호</label>
                                <input
                                id="accountCallNum1"
                                type="number"
                                maxLength="3"
                                onKeyUp={lengthcheck}
                                required
                                className=" account-input"
                                defaultValue={userData.usercall1}
                                name='usercall1'
                                />
                                <input
                                id="accountCallNum2"
                                type="number"
                                maxLength="4"
                                onKeyUp={lengthcheck}
                                required
                                className=" account-input"
                                defaultValue={userData.usercall2}
                                name='usercall2'
                                />
                                <input id="accountCallNum3"
                                type="number"
                                maxLength="4"
                                className=" account-input"
                                defaultValue={userData.usercall3}
                                name='usercall3'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-btn-box">
                    <button className="account-manage-btn" id="accountDelBtn">삭제</button>
                    <button className="account-manage-btn" type="submit">저장</button>
                </div>
            </form>
            </div>
    </div>
    );
};

export default AccountManage;