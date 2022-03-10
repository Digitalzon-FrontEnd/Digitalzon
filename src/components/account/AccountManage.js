import React,{useState} from "react";
import "./AccountManage.css";
import { Link } from "react-router-dom";
import dummy from '../../db/accountData.json'
import AccountUser from "./AccountUser";

const AccountManage = () => {
    {/*const [visible,setVisible] = useState();*/}

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
                            {dummy.userAccountData.map((userinfo)=>(<li>{userinfo.userinfo}</li>))} {/* map 함수로 리스트*/}
                        </ul>
                    </div>
                    <AccountUser/>
                </div>
            </div>
            <div className="account-btn-box">
                <h1>보이시나여?
                </h1>
                <button className="account-manage-btn" id="accountDelBtn">삭제</button>
                <button className="account-manage-btn" type="submit">저장</button>
            </div>
            </form>
            </div>
    </div>
    );
};

export default AccountManage;