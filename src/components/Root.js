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
import Home from "./home/Home.js"
import MainQA from './q&a/mainq&a/MainQA'
import PublishQA from "./q&a/publishq&a/PublishQA";
import DetailQA1 from "./q&a/detailq&a/DetailQA1";
const Root = () => {
  const [user, SetUser] = useState(false);
  let [tableInfo,setTableInfo] = useState ([{
    번호 :'8',
    제목 : 'Q&A 게시판',
    등록일 : '2021.09.30',
    등록자 : '전선향',
    내용 : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '

  },{
    번호 :'7',
    제목 : 'Q&A 게시판',
    등록일 : '2021.09.28',
    등록자 : '고승원',
    내용 : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  '
  },{
    번호 :'6',
    제목 : 'Q&A 게시판',
    등록일 : '2021.09.17',
    등록자 : '안소향',
    내용 : 'Many desktop publishing packages'
  },{
    번호 :'5',
    제목 : 'Q&A 게시판',
    등록일 : '2021.09.08',
    등록자 : '황유희',
    내용 : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it'
    
  },{
    번호 :'4',
    제목 : 'Q&A 게시판',
    등록일 : '2021.08.28',
    등록자 : '홍길동',
    내용 : 'Many desktop publishing packages'
  },
  {
    번호 :'3',
    제목 : 'Q&A 게시판',
    등록일 : '2021.08.13',
    등록자 : '고승원',
    내용 : 'Many desktop publishing packages'
  },
  {
    번호 :'2',
    제목 : 'Q&A 게시판',
    등록일 : '2021.07.28',
    등록자 : '고승원',
    내용 : 'Many desktop publishing packages'
  },{
    번호 :'1',
    제목 : 'Q&A 게시판',
    등록일 : '2021.07.10',
    등록자 : '황유희',
    내용 : 'Many desktop publishing packages'
  },
])
  return (
    <div>
    {/* <  Header /> */}
      <Route  exact path="/" component={Main}/>
      <Route  exact path="/mainqa" render={(props) => (
        <MainQA  tableInfo={tableInfo} setTableInfo={setTableInfo} {...props}/>
  )} />
      <Route path="/faq" render={() => <Faq user={user} />} />
      <Route path="/guide" render={() => <Guide user={user} />} />
      <Route path="/login" component={Login} />
      <Route path="/terms" component={Terms} />
      <Route path="/findId" component={FindId} />
      <Route path="/findPw" component={FindPw} />
      <Route path="/panel" component={Panel} />
      <Route path="/infoinput" component={InfoInput} />
      <Route path="/complete" component={Complete} />
      <Route path="/home" component={Home}/>
      <Route path="/publish" render={(props) => (
        <PublishQA  tableInfo={tableInfo} setTableInfo={setTableInfo} {...props}/>
  )}/>
      <Route path={`/mainqa/detailqa/:num`}component={DetailQA1}/>
      <Footer /> 
    </div>
  );
};

export default Root;

