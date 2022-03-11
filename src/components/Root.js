import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./main/Main";
import { Route, Switch } from "react-router-dom";
import Faq from "./faq/Faq";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Panel from "./login/panel/Panel";
import FindId from "./login/find/FindId";
import FindPw from "./login/find/FindPw";
import Terms from "./login/signup/Terms";
import Complete from "./login/signup/Complete";
import InfoInput from "./login/signup/InfoInput";
import ManagePoint from "./managepoint/ManagePoint";
import PostView from "./panelsystem/PostView";
import PostList from "./panelsystem/PostList";



const Root = () => {
  const [user, SetUser] = useState(false);
  const [ posts, setPosts ] = useState([
    {
        number : '16',
        name : 'Q',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2022-02-04',
        statedate : '2022-02-04',
        state : '처리 완료',
        statemanager : '홍길동',
        record: []
    },
    {
        number : '15',
        name : 'P',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2022-02-04',
        statedate : '2022-02-04',
        state : '처리 완료',
        statemanager : '홍길동',
        record: []
    },
    {
        number : '14',
        name : 'O',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2022-01-22',
        statedate : '2022-01-22',
        state : '처리 완료',
        statemanager : '홍길동',
        record: [] 
    },
    {
        number : '13',
        name : 'N',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2022-01-15',
        statedate : '2022-01-15',
        state : '처리중',
        statemanager : '홍길동',
        record: []
    },
    {
        number : '12',
        name : 'M',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-12-28',
        statedate : '2021-12-28',
        state : '처리 완료',
        statemanager : '홍길동',
        record: [] 
    },
    {
        number : '11',
        name : 'L',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-11-28',
        statedate : '2021-11-28',
        state : '처리 완료',
        statemanager : '홍길동' ,
        record: []
    },
    {
        number : '10',
        name : 'K',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-10-28',
        statedate : '2021-10-28',
        state : '처리 완료',
        statemanager : '홍길동' ,
        record: []
    },
    {
        number : '9',
        name : 'J',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-09-04',
        statedate : '2021-09-05',
        state : '처리 완료',
        statemanager : '해당없음' ,
        record: []
    },
    {
        number : '8',
        name : 'H',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-08-04',
        statedate : '2021-08-05',
        state : '처리 완료',
        statemanager : '홍길동',
        record: [] 
    },
    {
        number : '7',
        name : 'G',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-07-10',
        statedate : '2021-07-11',
        state : '처리 완료',
        statemanager : '홍길동',
        record: [] 
    },
    {
        number : '6',
        name : 'F',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-07-04',
        statedate : '2021-07-05',
        state : '처리 완료',
        statemanager : '해당없음',
        record: [] 
    },
    {
        number : '5',
        name : 'E',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-06-04',
        statedate : '2021-06-05',
        state : '처리 완료',
        statemanager : '홍길동' ,
        record:[]
    },
    {
        number : '4',
        name : 'D',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-05-10',
        statedate : '2021-05-10',
        state : '처리 완료',
        statemanager : '김주리' ,
        record:[]
    },
    {
        number : '3',
        name : 'C',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-05-04',
        statedate : '2021-05-05',
        state : '처리 완료',
        statemanager : '김주리' ,
        record:[]
    },
    {
        number : '2',
        name : 'B',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-04-05',
        statedate : '2021-04-05',
        state : '처리 중',
        statemanager : '해당없음',
        record:[] 
    },
    {
        
        number : '1',
        name : 'A',
        phonenumber : '010-xxxx-xxxx',
        email : '22222@gmail.com',
        date : '2021-03-04',
        statedate : '2021-03-05',
        state : '접수',
        statemanager : '홍길동' ,
        record:[]
    },
]) 
/* 패널시스템 현황 데이터 */



  return (
    <div>
      <Header />
      
      <Route exact path="/" component={Main}/>
      <Route path="/faq" render={() => <Faq user={user} />} />
      <Route path="/guide" render={() => <Guide user={user} />} />
      <Route path="/login" component={Login} />
      <Route path="/terms" component={Terms} />

      <Route path="/findId" component={FindId} />
      <Route path="/findPw" component={FindPw} />
      <Route exact path="/panel" component={Panel} />
      <Route path="/infoinput" component={InfoInput} />
      <Route path="/complete" component={Complete} />
      
      <Route exact path="/panel/board" render={() => <PostList posts={posts} />}/>
      <Route exact path="/panel/view/:no" render={() => <PostView posts={posts} setPosts={setPosts}/>} />
      
      <Route path="/managepoint" component={ManagePoint} />
      
      


      <Footer />
    </div>
  );
};

export default Root;
