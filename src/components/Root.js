import React, { useState } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Route } from "react-router-dom";

import Survey from "./survey/Survey";
import SurveyDetail from "./survey/SurveyDetail";

const Root = () => {
  const [posts, setPosts] = useState([
    {
      num: 1,
      surveyName: "갤럭시S21 사용자 만족도 조사",
      date: "2021.10.28 ~ 2021.11.28",
      needSample: 500,
      completeSample: 10,
      state: "승인완료",
      registrant: "홍길동",
      affiliation: "개인",
      activation: true,
    },
    {
      num: 2,
      surveyName: "갤럭시S21 사용자 만족도 조사2",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 20,
      state: "승인실패",
      registrant: "홍길동2",
      affiliation: "개인2",
      activation: false,
    },
    {
      num: 3,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 20,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 4,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 30,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 5,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 240,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 6,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 290,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 7,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 920,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 8,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 1020,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 9,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 2320,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },

    {
      num: 10,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 5200,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 11,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 1220,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 12,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 2320,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 13,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 4120,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 14,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 4420,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
    {
      num: 15,
      surveyName: "갤럭시S21 사용자 만족도 조사3",
      date: "2021.10.11 ~ 2021.11.22",
      needSample: 5200,
      completeSample: 2011,
      state: "승인실패",
      registrant: "홍길동3",
      affiliation: "개인3",
      activation: false,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [user, SetUser] = useState(false);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  return (
    <div>
      <Header />
      <Route
        exact={true}
        path="/"
        render={() => (
          <Survey
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
