import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./main/Main";
import { Route, Router } from "react-router-dom";
import Faq from "./faq/Faq";
import Guide from "./guide/Guide";
import Login from "./login/Login";
import Terms from "./login/signup/Terms";
import Panel from "./login/panel/Panel";
const Root = () => {
  const [user, SetUser] = useState(false);

  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/faq" render={() => <Faq user={user} />} />
      <Route path="/guide" render={() => <Guide user={user} />} />
      <Route path="/login" component={Login} />
      <Route path="/terms" component={Terms} />
      <Route path="/panel" component={Panel} />
      <Footer />
    </div>
  );
};

export default Root;
