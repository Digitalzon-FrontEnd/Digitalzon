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
import Home from "./home/Home.js"
import MainQA from './q&a/mainq&a/MainQA'
import PublishQA from "./q&a/publishq&a/PublishQA";
import DetailQA1 from "./q&a/detailq&a/DetailQA1";
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
  const [userList, setUserList] = useState([
    {
        "id": 0,
        "userco": "(주) A",
        "accountid": "juri42",
        "accountpw": 123456789,
        "mail": "juri42@gmail.com",
        "userid": "김주리",
        "usercall1": "010",
        "usercall2": "1234",
        "usercall3": "5678",
        "userinfo": "(주) A 김주리"
    },
    {
        "id": 1,
        "userco": "(주) B",
        "accountid": "perfume22",
        "accountpw": 987654321,
        "mail": "perfume22@naver.com",
        "userid": "전선향",
        "usercall1": "010",
        "usercall2": "9876",
        "usercall3": "5432",
        "userinfo": "(주) B 전선향"
    }
  ]);
// user-List

  const handleCreate = (accountid,accountpw,mail,userid,usercall1,usercall2,usercall3) => {
    const userArray = [...userList];
    userArray.push({
        "id": 2,
        "userco": "(주) C",
        "accountid": `${accountid}`,
        "accountpw": `${accountpw}`,
        "mail": `${mail}`,
        "userid": `${userid}`,
        "usercall1": `${usercall1}`,
        "usercall2": `${usercall2}`,
        "usercall3": `${usercall3}`,
        "userinfo": `(주) C ${userid}`
    })
    setUserList(userArray)
  };
// user-List에 push 해주는 함수


  const [panelPosts, setPanelPosts] = useState([
    {
      number: "16",
      name: "Q",
      phonenumber: "010-xxxx-xxxx",
      email: "22222@gmail.com",
      date: "2022-02-04",
      statedate: "2022-02-04",
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
      state: "접수",
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
  
  
  /* 패널 시스템 select 관련 state */
  const [ point, setPoint ] = useState(0);  //아직 초기 데이터 값을 모르기 때문에 0으로 처리했다.
  const [ list, setList ] = useState([]);
    /* 사용내역 로그 */

  let [tableInfo,setTableInfo] = useState ([{
    num :'8',
    title : 'Q&A 게시판',
    date : '2021.09.30',
    user : '전선향',
    content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '

  },{
    num :'7',
    title : 'Q&A 게시판',
    date : '2021.09.28',
    user : '고승원',
    content : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  '
  },{
    num :'6',
    title : 'Q&A 게시판',
    date : '2021.09.17',
    user : '안소향',
    content : 'Many desktop publishing packages'
  },{
    num :'5',
    title : 'Q&A 게시판',
    date : '2021.09.08',
    user : '황유희',
    content : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it'

  },{
    num :'4',
    title : 'Q&A 게시판',
    date : '2021.08.28',
    user : '홍길동',
    content : 'Many desktop publishing packages'
  },
  {
    num :'3',
    title : 'Q&A 게시판',
    date : '2021.08.13',
    user : '고승원',
    content : 'Many desktop publishing packages'
  },
  {
    num :'2',
    title : 'Q&A 게시판',
    date : '2021.07.28',
    user : '고승원',
    content : 'Many desktop publishing packages'
  },{
    num :'1',
    title : 'Q&A 게시판',
    date : '2021.07.10',
    user : '황유희',
    content : 'Many desktop publishing packages'
  },
])
/* Q&A 데이터 */

  const [posts, setPosts] = useState(surveyData);
  // 설문 테스트 데이터

  const [currentPage, setCurrentPage] = useState(1);
  //현재 페이지 위치
  const postsPerPage = 10;
  // 한 화면에 볼 수 있는 설문 개수
  const [user, setUser] = useState({
    id : '',
    login: false,
    grade: 0,
  });
  // 로그인 비로그인
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast); // 0 ~ 10 |  10 ~ 20
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
    <  Header user={user} point={point}/>

      <Route  exact path="/" component={Main}/>
      <Route  exact path="/mainqa" render={(props) => (
        <MainQA  tableInfo={tableInfo} setTableInfo={setTableInfo} {...props}/>
  )} />
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
        path="/point/view/:id"
        render={() => (
          <PointView pointItems={pointItems} setPointItems={setPointItems} />
        )}
      />
      <Route
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
        render={() => <PostList 
          posts={panelPosts} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>}
      />
      <Route
        exact
        path="/panel/view/:no"
        render={() => <PostView 
          posts={panelPosts} 
          setPosts={setPanelPosts} 
        />}
      />

      <Route path="/managepoint" render={()=>(<ManagePoint point={point} setPoint={setPoint} list={list} setList={setList}/>)} />
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
      <Route path="/home" component={Home}/>
      <Route path="/publish" render={(props) => (
        <PublishQA  tableInfo={tableInfo} setTableInfo={setTableInfo} {...props} />
  )}/>
      <Route path={`/mainqa/detailqa/:num`} render={(props) => (
        <DetailQA1 tableInfo={tableInfo} setTableInfo={setTableInfo} {...props}/>
  )}
      />
      <Route path="/accountchange" component={AccountChange} />
      <Route path="/accountsetup" render={() => <AccountSetup handleCreate={handleCreate} setUserList={setUserList}/>} />
      <Route path="/accountmanage" render={(props) => <AccountManage userList={userList} handleCreate={handleCreate} setUserList={setUserList} />} />
      <Route path="/mypage" component={MyPage} />
      <Footer />
    </div>
  );
};

export default Root;

