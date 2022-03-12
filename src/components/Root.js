import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./main/Main";
import { Route } from "react-router-dom";
import Faq from "./faq/Faq";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Panel from "./login/panel/Panel";
import FindId from "./login/find/FindId";
import FindPw from "./login/find/FindPw";
import Terms from "./login/signup/Terms";
import Complete from "./login/signup/Complete";
import InfoInput from "./login/signup/InfoInput";
import AccountChange from "./account/AccountChange";
import AccountSetup from "./account/AccountSetup";
import AccountManage from "./account/AccountManage";
import MyPage from "./account/MyPage";

const Root = () => {
  const [user, setUser] = useState(false);
  
  const [userList, setUserList] = useState([
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
]);
/* user-List */

  const handleCreate = (accountid,accountpw,mail,userid,usercall1,usercall2,usercall3) => {
    const userArray = [...userList];
    userArray.push({
        "id": 3,
        "userco": "(주) C",
        "accountid": `${accountid}`, 
        "accountpw": `${accountpw}`, 
        "mail": `${mail}`, 
        "userid": `${userid}`, 
        "usercall1": `${usercall1}`,
        "usercall2": `${usercall2}`,
        "usercall3": `${usercall3}`,
        "userinfo": `(주) C ${userid}`
    })
    setUserList(userArray)
  };
  /* user-List에 push 해주는 함수 */

  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/faq" render={() => <Faq user={user} />} />
      <Route path="/guide" render={() => <Guide user={user} />} />
      <Route path="/login" render={() => <Login setUser={setUser} />} />
      <Route path="/terms" component={Terms} />
      <Route path="/findId" component={FindId} />
      <Route path="/findPw" component={FindPw} />
      <Route path="/panel" component={Panel} />
      <Route path="/infoinput" component={InfoInput} />
      <Route path="/complete" component={Complete} />
      <Route path="/accountchange" component={AccountChange} />
      <Route path="/accountsetup" render={() => <AccountSetup handleCreate={handleCreate} setUserList={setUserList}/>} />
      <Route path="/accountmanage" render={() => <AccountManage userList={userList} handleCreate={handleCreate} setUserList={setUserList}/>} />
      <Route path="/mypage" component={MyPage} />
      <Footer />
    </div>
  );
};

export default Root;