import React, { useState } from "react";
import Footer from "./common/Footer";
import { Route } from "react-router-dom";

import Survey from "./survey/Survey";
import SurveyDetail from "./survey/SurveyDetail";

const Root = () => {
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
      activation: true,
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
  const [user, SetUser] = useState(false);
  // 로그인 비로그인

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  return (
    <div>
      <Route
        exact={true}
        path="/"
        render={() => (
          <Survey
            totalIndexPosts={posts}
            posts={currentPosts(posts)}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={setCurrentPage}
          />
        )}
      />
      <Route path={`/survey/SurveyDetail/:num`} component={SurveyDetail} />
      <Footer />
    </div>
  );
};

export default Root;
