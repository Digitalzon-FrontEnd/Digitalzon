import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
const Root = () => {
  return (
    <div>
      <Header />
      <div className="inner_box">
        {/*  inner-box 에 있는 컴포넌트 추가하시면 됩니다.  */}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
