import React, { useState } from 'react';
import './Home.css'

function Home() {
  let [checkedType,setcheckedType] = useState(['설문예정','설문중','설문마감']);
  function changeType0(){
    let newarray = [...checkedType]
    newarray[0]= '설문예정'
    setcheckedType(newarray)
  }
  function changeType1(){
    let newarray = [...checkedType]
    newarray[0]= '설문중'
    setcheckedType(newarray)
  }
  function changeType2(){
    let newarray = [...checkedType]
    newarray[0]='설문마감'
    setcheckedType(newarray)
  }
  return (
    <div>
      <form className='select'>
        <label>
          <input onClick={changeType0} className='select-one' type="radio" name="설문" defaultChecked/>설문예정</label>
        <label>
        <input onClick={changeType1} className='select-two' type="radio" name="설문"/>설문중</label>
        <label>
          <input onClick={changeType2} className='select-three' type="radio" name="설문"/>설문마감</label>
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
          <tr>
            <td>2</td>
            <td>갤럭시S21 사용자 만족도 조사</td>
            <td>2021.10.28 ~ 2021.11.28</td>
            <td>500</td>
            <td>0</td>
            <td>{checkedType[0]}</td>
            <td>홍길동</td>
            <td>개인</td>
          </tr>
          <tr>
            <td>1</td>
            <td>패널인증시스템 수요도 조사</td>
            <td>2021.10.28 ~ 2021.11.28</td>
            <td>500</td>
            <td>0</td>
            <td>{checkedType[0]}</td>
            <td>홍길동</td>
            <td>개인</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home;