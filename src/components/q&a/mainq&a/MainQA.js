import React, { useState ,useRef, useEffect} from "react";
import {Link} from 'react-router-dom'
import Gnb from "../../common/Gnb"
import Pagination from '../../common/Pagination'
import "./MainQA.css"
import { useHistory } from 'react-router-dom';

function MainQA({location,tableInfo, user}){
  const history = useHistory();
  useEffect(() => {
    if (location.state === undefined) {
      setCurrentPage(1);
    } else {
      setCurrentPage(location.state.currentPage);
      history.replace();
    }
  }, []);
  const [searchedSurveys, setSearchedSurveys] = useState(tableInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast); // 0 ~ 10 |  10 ~ 20
    return currentPosts;
  }
  const surveyInputRef =useRef(0)
  const surveySerachFnc = () => {
    let tmpItems = [...tableInfo];
    const val = surveyInputRef.current.value;
    tmpItems = tmpItems.filter((item) => {
      if (item.user.indexOf(val) !== -1 || item.title.indexOf(val) !== -1 ) {
        return item;
      }
    });
    console.log(tmpItems);
    setSearchedSurveys(tmpItems);
    setCurrentPage(1);
  };

  const surveyInputEnter = (e) => {
    if (e.key === "Enter") {
      // surveySerachFnc(surveyInputRef);
      surveySerachFnc();
    }
  };
  const surveyInputClick = () => {
    // surveySerachFnc(surveyInputRef);
    surveySerachFnc();
  };
  return(
    <div className='mainqa'>
      <Gnb user={user} />
        <div className='btn-head'>
          <Link to={{pathname:'/publish',}}>
            <button className='btn-publish'>신규등록</button></Link>
          <div className='btn-search'>
            <input type="text" onKeyPress={surveyInputEnter} ref={surveyInputRef}></input>
            <button><img src="/img/mdi-magnify.png" onClick={surveyInputClick} /></button>
          </div>
        </div>
        <table className='mainqa-table'>
          <thead className='table-head'>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록일</th>
                <th>등록자</th>
              </tr>
          </thead>
          <tbody>
                {currentPosts(searchedSurveys).map(function(a,index){
                return(
                        <tr key={index}>
                          <td>{a.num}</td>
                          <td><Link to={{
                            pathname:`/mainqa/detailqa/${a.num}`,
                            state:{num:a.num,title:a.title,date:a.date,user:a.user,content:a.content,
                            currentPage:currentPage}
                            }}
                          >{a.title}</Link></td>
                          <td>{a.date}</td>
                          <td>{a.user}  </td>
                        </tr> 
                )
              })}
    </tbody>
        </table>
        <Pagination postsPerPage={postsPerPage}
          totalPosts={searchedSurveys.length > 0 ? searchedSurveys.length : 1}
          paginate={setCurrentPage}
          currentPage={currentPage}/>
    </div>
  )
}
export default MainQA;

