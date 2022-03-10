import React, { useState,useEffect } from "react";
import dummy from '../../db/accountData.json'
import "./AccountUser.css";

const AccountUser = ()=>{
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

    const [userDate,setUserData]  = useState({
        accountid:'',
        accountpw:'',
        mail:'',
        userid:'',
        usercall1:'',
        usercall2:'',
        usercall3:'',
        userinfo:''     
    })

    useEffect(() => { 
        setUserData({
                useraccountid:'juri42',
                useraccountpw:'123456789',
                usermail:'juri42@gmail.com',
                userid:'김주리',
                usercall1:'010',
                usercall2:'1234',
                usercall3:'5678',
                userinfo:'i'    
        })
    }, [])



    return (
        <div>
            {/* {userList.map((user)=>( */}
                <div className="account-manage-info2" id="clickForm">
                    <div className="account-id">
                        <label>아이디</label>
                        <input className=" account-input" value={userDate.useraccountid}></input>
                    </div>
                    <div className="account-password">
                        <label>비밀번호</label>
                        <input type="text" className=" account-input" value={userDate.useraccountpw}></input>
                    </div>
                    <div className="account-email">
                        <label>E-Mail</label>
                        <input type="email" className=" account-input" value={userDate.usermail}></input>
                    </div>
                    <div className="account-username">
                        <label>사용자명</label>
                        <input className=" account-input" value={userDate.userid}></input>
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
                        value={userDate.usercall1}
                        />
                        <input
                        id="accountCallNum2"
                        type="text"
                        maxLength="4"
                        onKeyUp={lengthcheck}
                        required
                        className=" account-input"
                        value={userDate.usercall2}
                        />
                        <input id="accountCallNum3"
                        type="text"
                        maxLength="4"
                        className=" account-input"
                        value={userDate.usercall3}
                        />
                    </div>
                </div>
            
            
            {/*
            <div className="account-manage-info" id="defaultForm">
                <div className="account-id">
                    <label>아이디</label>
                    <input className=" account-input"></input>
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
            */}
        </div>
    );
};

export default AccountUser;