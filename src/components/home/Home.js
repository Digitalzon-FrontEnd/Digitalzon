import React, { useState } from 'react';
import './Home.css'
import Gnb from '../common/Gnb';

function Home() {
  let [checkedType,setcheckedType] = useState([{
    num:'160',
    name:'갤럭시S21 사용자 만족도 조사',
    date : '2021.10.28 ~ 2021.11.28',
    reSample:'500',
    coSample:'0',
    state:'설문예정',    
    user:'홍길동',
    team:'개인',

  },{
    num:'159',
    name:'패널인증시스템 수요도 조사',
    date : '2021.10.28 ~ 2021.11.28',
    reSample:'500',
    coSample:'0',
    state:'설문중',
    user:'홍길동',
    team:'개인'
  },{
    num:'158',
    name:'비대면 시장조사 필요성 인식 조사',
    date : '2021.09.30 ~ 2021.10.25',
    reSample:'2,500',
    coSample:'1,500',
    state:'설문중',
    user:'김주리',
    team:'PMI'
  },{
    num:'157',
    name:'삼성 비스포크 냉장고 만족도 조사',
    date : '2021.09.15~2021.09.30',
    reSample:'3,000',
    coSample:'0',
    state:'설문예정',
    user:'전선향',
    team:'디지털존'
  },{
    num:'156',
    name:'남녀 성차별 인식 조사',
    date : '2021.08.27 ~ 2021.09.28',
    reSample:'300',
    coSample:'0',
    state:'설문마감',
    user:'김주리',
    team:'PMI'
  },{
    num:'155',
    name:'전국지표조사',
    date : '2021.08.25 ~ 2021.09.15',
    reSample:'100',
    coSample:'0',
    state:'설문마감',
    user:'안소현',
    team:'B업체'
  }
]);
  const [radioValue, setRadioValue] = useState("설문예정");
  function changeRadioValue(e){
    setRadioValue(e.target.value)
  }
  return (
    <div>
      <Gnb/>
      <form className='select'>
        <label>
          <input onClick={changeRadioValue} className='select-one' type="radio" name="설문" value="설문예정" defaultChecked />설문예정</label>
        <label>
        <input onClick={changeRadioValue} className='select-two' type="radio" name="설문" value="설문중"/>설문중</label>
        <label>
          <input onClick={changeRadioValue} className='select-three' type="radio" name="설문" value="설문마감"/>설문마감</label>
      </form>
      <table className='qa-table'>
        <thead className=''>
          <tr>
            <th id="num">설문번호</th>
            <th id="name">조사명</th>
            <th id="date">요청기간</th>
            <th id="re-sample">필요샘플 수</th>
            <th id="co-sample">완료샘플 수</th>
            <th id="state">상태</th>
            <th id="user">등록자</th>
            <th id="team">소속</th>
          </tr>
        </thead>
        <tbody>
        {checkedType.map(function(a,index){
                return(
                  radioValue === a.state ? 
                    <tr key={index}>
                          <td>{a.num}</td>
                          <td>{a.name}</td>
                          <td>{a.date}</td>
                          <td>{a.reSample}</td>
                          <td>{a.coSample}</td>
                          <td>{a.state}</td>
                          <td>{a.user}</td>
                          <td>{a.team}</td>
                        </tr> : null 
                )
              })}
        </tbody>
      </table>
    </div>
  )
}

export default Home;