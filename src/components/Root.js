import React, { useState } from "react";
import Footer from "./common/Footer";
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

import ManagePoint from "./managepoint/ManagePoint";
import PostView from "./panelsystem/PostView";
import PostList from "./panelsystem/PostList";

import Survey from "./survey/Survey";
import SurveyDetail from "./survey/SurveyDetail";
import SurveyRegist from "./survey/SurveyRegist";
import SurveyModify from "./survey/SurveyModify";
import Header from "./common/Header";
import Main from "./main/Main";
const Root = () => {
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

  const [panelPosts, setPanelPosts] = useState([
    {
      number: "16",
      name: "Q",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2022-02-04",
      statedate: "2022-02-04",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "15",
      name: "P",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2022-02-04",
      statedate: "2022-02-04",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "14",
      name: "O",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2022-01-22",
      statedate: "2022-01-22",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "13",
      name: "N",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2022-01-15",
      statedate: "2022-01-15",
      state: "처리중",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "12",
      name: "M",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-12-28",
      statedate: "2021-12-28",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "11",
      name: "L",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-11-28",
      statedate: "2021-11-28",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "10",
      name: "K",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-10-28",
      statedate: "2021-10-28",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "9",
      name: "J",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-09-04",
      statedate: "2021-09-05",
      state: "처리 완료",
      statemanager: "해당없음",
      record: [],
    },
    {
      number: "8",
      name: "H",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-08-04",
      statedate: "2021-08-05",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "7",
      name: "G",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-07-10",
      statedate: "2021-07-11",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "6",
      name: "F",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-07-04",
      statedate: "2021-07-05",
      state: "처리 완료",
      statemanager: "해당없음",
      record: [],
    },
    {
      number: "5",
      name: "E",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-06-04",
      statedate: "2021-06-05",
      state: "처리 완료",
      statemanager: "홍길동",
      record: [],
    },
    {
      number: "4",
      name: "D",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-05-10",
      statedate: "2021-05-10",
      state: "처리 완료",
      statemanager: "김주리",
      record: [],
    },
    {
      number: "3",
      name: "C",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-05-04",
      statedate: "2021-05-05",
      state: "처리 완료",
      statemanager: "김주리",
      record: [],
    },
    {
      number: "2",
      name: "B",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-04-05",
      statedate: "2021-04-05",
      state: "처리 중",
      statemanager: "해당없음",
      record: [],
    },
    {
      number: "1",
      name: "A",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2021-03-04",
      statedate: "2021-03-05",
      state: "접수",
      statemanager: "홍길동",
      record: [],
    },
  ]);
  /* 패널시스템 현황 데이터 */
  const [posts, setPosts] = useState([
    {
      num: 15,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사15",
      date: "2021.10.28 ~ 2021.11.28",
      needSample: 500,
      completeSample: 10,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인완료",
      registrant: "홍길동",
      affiliation: "개인",
      activation: true,
    },
    {
      num: 14,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사14",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 20,
      pointPerPerson: 1000,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동2",
      affiliation: "개인2",
      activation: false,
    },
    {
      num: 13,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 20,
      pointPerPerson: 1500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: true,
    },

    {
      num: 12,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 30,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 11,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 240,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 10,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 290,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 9,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 920,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 8,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 1020,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 7,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 2320,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },

    {
      num: 6,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 5200,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 5,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 1220,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 4,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 2320,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 3,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 4120,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 2,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 4420,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: true,
    },
    {
      num: 1,
      link: "http://www.survey15.com",
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 2011,
      pointPerPerson: 500,
      profile1: ["남성", "20~39세"],
      profile2: ["SKT"],
      profile3: ["갤럭시S21"],
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: true,
    },
  ]);
  // 설문 테스트 데이터

  const [currentPage, setCurrentPage] = useState(1);
  //현재 페이지 위치
  const [postsPerPage, setPostsPerPage] = useState(10);
  // 한 화면에 볼 수 있는 설문 개수
  const [user, setUser] = useState(false);
  // 로그인 비로그인
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast); // 0 ~ 10 |  10 ~ 20
    return currentPosts;
  }
  /*  */
  const surveySerachFnc = (ref) => {
    return new Promise(function (resolve, reject) {
      const value = ref.current.value;
      const searchPosts = [...posts];
      const result = searchPosts.filter(
        (post) => post.surveyName.indexOf(value) !== -1
      );
      if (result.length <= 0) {
        alert("입력하신 조사명은 존재 하지 않습니다.");
        return false;
      }
      setPosts(result);
      setCurrentPage(1);
    });
  };
  /*  */
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
      <Route exact path="/panel" component={Panel} />
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

      <Route
        exact
        path="/panel/board"
        render={() => <PostList posts={panelPosts} />}
      />
      <Route
        exact
        path="/panel/view/:no"
        render={() => <PostView posts={panelPosts} setPosts={setPanelPosts} />}
      />

      <Route path="/managepoint" component={ManagePoint} />
      <Route
        exact={true}
        path="/survey"
        render={() => (
          <Survey
            totalIndexPosts={
              posts
            } /* 전체 데이터 (라디오 버튼에서 사용함으로 다른 컴포넌트에서 필요 X) */
            posts={currentPosts(posts)} /* 10개씩 자른 데이터 */
            setPosts={setPosts}
            postsPerPage={postsPerPage} /* 한 화면에 볼 수 있는 설문 개수 */
            totalPosts={posts.length} /* 데이터 수 */
            paginate={setCurrentPage} /* 현재 페이지 위치  */
            surveySerachFnc={surveySerachFnc}
            currentPage={currentPage}
          />
        )}
      />

      <Route
        path="/survey/SurveyDetail/:num"
        component={(props) => <SurveyDetail setPosts={setPosts} {...props} />}
      />

      <Route
        path="/surveymodify"
        component={(props) => (
          <SurveyModify posts={posts} setPosts={setPosts} {...props} />
        )}
      />

      <Route path="/surveyregist" component={SurveyRegist} />

      <Footer />
    </div>
  );
};

export default Root;
