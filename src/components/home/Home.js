import React, { useState } from 'react';
import './Home.css'

function Home() {
  let [checkedType,setcheckedType] = useState([{
    설문번호:'160',
    조사명:'갤럭시S21 사용자 만족도 조사',
    요청기간 : '2021.10.28 ~ 2021.11.28',
    필요샘플수:'500',
    완료샘플수:'0',
    상태:'설문예정',
    등록자:'홍길동',
    소속:'개인',

  },{
    설문번호:'159',
    조사명:'패널인증시스템 수요도 조사',
    요청기간 : '2021.10.28 ~ 2021.11.28',
    필요샘플수:'500',
    완료샘플수:'0',
    상태:'설문중',
    등록자:'홍길동',
    소속:'개인'
  },{
    설문번호:'158',
    조사명:'비대면 시장조사 필요성 인식 조사',
    요청기간 : '2021.09.30 ~ 2021.10.25',
    필요샘플수:'2,500',
    완료샘플수:'1,500',
    상태:'설문중',
    등록자:'김주리',
    소속:'PMI'
  },{
    설문번호:'157',
    조사명:'삼성 비스포크 냉장고 만족도 조사',
    요청기간 : '2021.09.15~2021.09.30',
    필요샘플수:'3,000',
    완료샘플수:'0',
    상태:'설문예정',
    등록자:'전선향',
    소속:'디지털존'
  },{
    설문번호:'156',
    조사명:'남녀 성차별 인식 조사',
    요청기간 : '2021.08.27 ~ 2021.09.28',
    필요샘플수:'300',
    완료샘플수:'0',
    상태:'설문마감',
    등록자:'김주리',
    소속:'PMI'
  },{
    설문번호:'155',
    조사명:'전국지표조사',
    요청기간 : '2021.08.25 ~ 2021.09.15',
    필요샘플수:'100',
    완료샘플수:'0',
    상태:'설문마감',
    등록자:'안소현',
    소속:'B업체'
  }
]);
  const [radioValue, setRadioValue] = useState("설문예정");
  function changeRadioValue(e){
    setRadioValue(e.target.value)
  }
  return (
    <div>
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
            <th>설문번호</th>
            <th>조사명</th>
            <th>요청기간</th>
            <th>필요샘플 수</th>
            <th>완료샘플 수</th>
            <th>상태</th>
            <th>등록자</th>
            <th>소속</th>
          </tr>
        </thead>
        <tbody>
        {checkedType.map(function(a){
                return(
                  radioValue === a.상태 ? 
                    <tr key={a.설문번호}>
                          <td>{a.설문번호}</td>
                          <td>{a.조사명}</td>
                          <td>{a.요청기간}</td>
                          <td>{a.필요샘플수}</td>
                          <td>{a.완료샘플수}</td>
                          <td>{a.상태}</td>
                          <td>{a.등록자}</td>
                          <td>{a.소속}</td>
                        </tr> : null 
                )
              })}
        </tbody>
      </table>
    </div>
  )
}

export default Home;