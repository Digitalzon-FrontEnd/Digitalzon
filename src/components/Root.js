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
    num :'8',
    title : 'Q&A 게시판',
    date : '2021.09.30',
    user : '전선향',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '

  },{
    num :'7',
    title : 'Q&A 게시판',
    date : '2021.09.28',
    user : '고승원',
    content : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  '
  },{
    num :'6',
    title : 'Q&A 게시판',
    date : '2021.09.17',
    user : '안소향',
    content : 'Many desktop publishing packages'
  },{
    num :'5',
    title : 'Q&A 게시판',
    date : '2021.09.08',
    user : '황유희',
    content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it'
    
  },{
    num :'4',
    title : 'Q&A 게시판',
    date : '2021.08.28',
    user : '홍길동',
    content : 'Many desktop publishing packages'
  },
  {
    num :'3',
    title : 'Q&A 게시판',
    date : '2021.08.13',
    user : '고승원',
    content : 'Many desktop publishing packages'
  },
  {
    num :'2',
    title : 'Q&A 게시판',
    date : '2021.07.28',
    user : '고승원',
    content : 'Many desktop publishing packages'
  },{
    num :'1',
    title : 'Q&A 게시판',
    date : '2021.07.10',
    user : '황유희',
    content : 'Many desktop publishing packages'
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

