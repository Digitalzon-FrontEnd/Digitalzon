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
import ApproveView from "./survey/approve/ApproveView";
import AccountChange from "./account/AccountChange";
import AccountSetup from "./account/AccountSetup";
import AccountManage from "./account/AccountManage";
import MyPage from "./account/MyPage";
import ManagePoint from "./managepoint/ManagePoint";
import PostView from "./panelsystem/PostView";
import PostList from "./panelsystem/PostList";
import Survey from "./survey/Survey";
import SurveyDetail from "./survey/SurveyDetail";
import SurveyRegist from "./survey/SurveyRegist";
import SurveyModify from "./survey/SurveyModify";
import Header from "./common/Header";
import Main from "./main/Main";
import surveyData from "../data/SurveyData";
import surveyApproveData from "../data/SurveyApproveData";
import pointData from "../data/pointData";
import panelData from "../data/panelData";
import userData from "../data/userData";
import qaData from "../data/qaData";
import Home from "./home/Home.js";
import MainQA from "./q&a/mainq&a/MainQA";
import PublishQA from "./q&a/publishq&a/PublishQA";
import DetailQA1 from "./q&a/detailq&a/DetailQA1";
const Root = () => {
  const [selectPointItem, setSelectPointItem] = useState({});
  const [pointItems, setPointItems] = useState(pointData);
  const [surveyApproveItems, setSurveyApproveItems] =
    useState(surveyApproveData);
  const [userList, setUserList] = useState(userData);
  // user-List

  const handleCreate = (
    accountid,
    accountpw,
    mail,
    userid,
    usercall1,
    usercall2,
    usercall3
  ) => {
    const userArray = [...userList];
    userArray.push({
      id: 2,
      userco: "(주) C",
      accountid: `${accountid}`,
      accountpw: `${accountpw}`,
      mail: `${mail}`,
      userid: `${userid}`,
      usercall1: `${usercall1}`,
      usercall2: `${usercall2}`,
      usercall3: `${usercall3}`,
      userinfo: `(주) C ${userid}`,
    });
    setUserList(userArray);
  };
  // user-List에 push 해주는 함수

  const [panelPosts, setPanelPosts] = useState(panelData);
  /* 패널시스템 현황 데이터 */
  let [tableInfo, setTableInfo] = useState(qaData);
  /* Q&A 데이터 */

  const [posts, setPosts] = useState(surveyData);
  // 설문 테스트 데이터

  const [currentPage, setCurrentPage] = useState(1);
  //현재 페이지 위치
  const postsPerPage = 10;
  // 한 화면에 볼 수 있는 설문 개수
  const [user, setUser] = useState(false);
  // 로그인 비로그인
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast); // 0 ~ 10 |  10 ~ 20
    console.log(currentPosts);
    return currentPosts;
  }
  /* 현재 포스트 */
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
  /* 설문조사 검색 */

  return (
    <div>
      <Header />
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/mainqa"
        render={(props) => (
          <MainQA
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            {...props}
          />
        )}
      />
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
            setSelectPointItem={setSelectPointItem}
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
      <Route path="/home" component={Home} />
      <Route
        path="/publish"
        render={(props) => (
          <PublishQA
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            {...props}
          />
        )}
      />
      <Route
        path={`/mainqa/detailqa/:num`}
        render={(props) => (
          <DetailQA1
            tableInfo={tableInfo}
            setTableInfo={setTableInfo}
            {...props}
          />
        )}
      />
      <Route path="/accountchange" component={AccountChange} />
      <Route
        path="/accountsetup"
        render={() => (
          <AccountSetup handleCreate={handleCreate} setUserList={setUserList} />
        )}
      />
      <Route
        path="/accountmanage"
        render={(props) => (
          <AccountManage
            userList={userList}
            handleCreate={handleCreate}
            setUserList={setUserList}
          />
        )}
      />
      <Route path="/mypage" component={MyPage} />
      <Footer />
    </div>
  );
};

export default Root;
