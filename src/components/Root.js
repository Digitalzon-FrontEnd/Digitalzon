import React from "react";
import { Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Login from "./login/Login";
import FindId from "./login/find/FindId";
import FindPw from "./login/find/FindPw";
import Panel from "./login/panel/Panel";
import Terms from "./login/signup/Terms";
const Root = () => {
  return (
    <div>
      <Header />
        <Route exact path="/login" component={Login} />
        <Route path="/findId" component={FindId} />
        <Route path="/findPw" component={FindPw} />
        <Route path="/signUp" component={Terms} />
        <Route path="/panel" component={Panel} />
      <Footer />
    </div>
  );
};

export default Root;
