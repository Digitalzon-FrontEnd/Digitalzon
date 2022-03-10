import React,{useState} from "react";
import "./AccountManage.css";
import { Link } from "react-router-dom";
import dummy from '../../db/accountData.json'
import AccountUser from "./AccountUser";

const AccountManage = () => {
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

    const [visible,setVisible] = useState(false);
    
    const [selected,setSelected] = useState('');
    const handleSelect = (e)=>{
        setSelected(e.target.value);
    }
    console.log(handleSelect)

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
                            {userList.map((userinfo)=>(<li>{userinfo.userinfo}</li>))} {/* map 함수로 리스트*/}
                        </ul>
                    </div>
                    {/*userList.map(c=>{
                        return <AccountUser key={c.id} id={c.id} accountid={c.accountid} accountpw={c.accountpw} mail={c.mail} userid={c.userid} usercall1={c.usercall1} usercall2={c.usercall2} usercall3={c.usercall3} />
                    })*/}
                    <AccountUser/>
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