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
import Point from "./point/Point";

const Root = () => {
  const [user, setUser] = useState(false);

  return (
    <div>
      <Header user={user} />
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
      <Route path="/point" component={Point} />
      <Footer />
    </div>
  );
};

export default Root;
