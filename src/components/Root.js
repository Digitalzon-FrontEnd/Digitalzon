import React from "react";
import { Route } from "react-router-dom" 
import Header from "./common/Header";
import Footer from "./common/Footer";
import Faq from "./faq/Faq";
import Guide from "./guide/Guide";
const Root = () => {
  return (
    <div>
      <Header />
      <div className="root">
        <Route exact path={"/"} component={Guide} />
        <Route exact path={"/faq"} component={Faq} />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
