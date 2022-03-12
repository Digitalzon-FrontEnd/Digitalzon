import React,{useState,useEffect, useRef} from "react";
import "./AccountManage.css";
import { Link } from "react-router-dom";


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

    const [userData,setUserData]  = useState({
        accountid:'',
        accountpw:'',
        mail:'',
        userid:'',
        usercall1:'',
        usercall2:'',
        usercall3:'' 
    })

    const userList = [
        {
            "id": 1,
            "userco": "(주) A",
            "accountid": "juri42", 
            "accountpw": 123456789, 
            "mail": "juri42@gmail.com", 
            "userid": "김주리", 
            "usercall1": "010",
            "usercall2": "1234",
            "usercall3": "5678",
            "userinfo": "(주) A 김주리"
        },
        {
            "id": 2,
            "userco": "(주) B",
            "accountid": "perfume22", 
            "accountpw": 987654321, 
            "mail": "perfume22@naver.com", 
            "userid": "전선향", 
            "usercall1": "010",
            "usercall2": "9876",
            "usercall3": "5432",
            "userinfo": "(주) B 전선향"
        }
    ]

    const click = (userInfo) => {
        setUserData(userInfo);
    };
    
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
                                {userList.map((userinfo)=>(<li onClick={()=>{click(userinfo)}}>{userinfo.userinfo}</li>))} {/* map 함수로 리스트*/}
                            </ul>
                        </div>

                        <div className="account-info-area" id="clickForm">
                            <div className="account-id">
                                <label>아이디</label>
                                <input className=" account-input" defaultValue={userData.accountid}></input>
                            </div>
                            <div className="account-password">
                                <label>비밀번호</label>
                                <input type="text" className=" account-input" defaultValue={userData.accountpw}></input>
                            </div>
                            <div className="account-email">
                                <label>E-Mail</label>
                                <input type="email" className=" account-input" defaultValue={userData.mail}></input>
                            </div>
                            <div className="account-username">
                                <label>사용자명</label>
                                <input className=" account-input" defaultValue={userData.userid}></input>
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
                                defaultValue={userData.usercall1}
                                />
                                <input
                                id="accountCallNum2"
                                type="text"
                                maxLength="4"
                                onKeyUp={lengthcheck}
                                required
                                className=" account-input"
                                defaultValue={userData.usercall2}
                                />
                                <input id="accountCallNum3"
                                type="text"
                                maxLength="4"
                                className=" account-input"
                                defaultValue={userData.usercall3}
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