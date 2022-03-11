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
import PointView from "./point/PointView";
import PointBoard from "./point/PointBoard";
import ApproveBoard from "./survey/approve/ApproveBoard";
import Approve from "./survey/approve/Approve";
import ApproveView from "./survey/approve/ApproveView";
const Root = () => {
  const [user, setUser] = useState(false);
  const [selectPointItem, setSelectPointItem] = useState({});
  const [pointItems, setPointItems] = useState([
    {
      id: 1,
      companyName: "A기업",
      managerName: "홍길동",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 2,
      companyName: "B기업",
      managerName: "고길동",

      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 3,
      companyName: "C기업",
      managerName: "고길동",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 4,
      companyName: "D기업",
      managerName: "우르사",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 5,
      companyName: "E기업",
      managerName: "포돌이",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 6,
      companyName: "F기업",
      managerName: "퓌파",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 7,
      companyName: "G기업",
      managerName: "월드콘",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 8,
      companyName: "H기업",
      managerName: "뼤뻬로",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 9,
      companyName: "I기업",
      managerName: "호빵",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
    {
      id: 10,
      companyName: "J기업",
      managerName: "콘초",
      phone: "010-000-0000",
      email: "abcd1234@000.com",
      pointAmount: "20,000",
      division: "환불신청",
      applyDate: "2021.10.28",
      modifiedDate: "2021.10.28",
      status: "접수",
      modifiedBy: "해당없음",
      record: [],
    },
  ]);
  const [surveyApproveItems, setSurveyApproveItems] = useState([
    {
      id: 1,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
      surveyProfiles: ["남성", "20세~39세", "SKT", "갤럭시S21"],
    },
    {
      id: 2,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 3,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 4,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 5,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 6,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 7,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 8,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 9,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
    {
      id: 10,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      surveyRequestDate: "2021.10.28~2021.11.28",
      needSampleCount: "500",
      completeSampleCount: "0",
      status: "승인완료",
      modifiedDate: "2021.10.28",
      modifiedBy: "홍길동",
      affiliation: "개인",
      record: [],
    },
  ]);
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
      <Route
        exact
        path="/point/board"
        render={() => (
          <PointBoard
            pointItems={pointItems}
            setPointItems={setPointItems}
            setSelectPointItem={setSelectPointItem}
            selectPointItem={selectPointItem}
          />
        )}
      ></Route>
      <Route
        exact
        path="/point/view/:id"
        render={() => (
          <PointView pointItems={pointItems} setPointItems={setPointItems} />
        )}
      />
      <Route
        exact
        path="/survey/approve/board"
        render={() => (
          <ApproveBoard
            surveyApproveItems={surveyApproveItems}
            setSurveyApproveItems={setSurveyApproveItems}
          />
        )}
      ></Route>
      <Route
        exact
        path="/survey/approve/view/:id"
        render={() => (
          <ApproveView
            surveyApproveItems={surveyApproveItems}
            setSurveyApproveItems={setSurveyApproveItems}
          />
        )}
      ></Route>
      <Footer />
    </div>
  );
};

export default Root;
