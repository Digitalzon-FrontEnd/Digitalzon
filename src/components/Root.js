import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Terms from "./login/signup/Terms";
import Complete from "./login/signup/Complete";
import { Route, Switch } from 'react-router-dom';
import InfoInput from "./login/signup/InfoInput";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="inner_box">
        <Switch>
          <Route exact path="/">
            <Terms />
          </Route>
          <Route path="/infoinput">
            <InfoInput />
          </Route>
          <Route path="/complete">
            <Complete />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
