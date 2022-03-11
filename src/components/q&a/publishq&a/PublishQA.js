import React, { useState } from 'react';
import './PublishQA.css'
import {Link} from 'react-router-dom'
import MainQA from "../mainq&a/MainQA";

function PublishQA({location}){
  const tableparams = location.state;
  console.log(location)
  return(
    <div className="publish-qa">
      <h1 className="qa-head1">Q&A등록</h1>
      <h2 className="qa-head2">설문 관련하여 궁금하신 점을 아래에 작성해주시면<br/>
        최대한 빠른 시간 내 답변을 등록하겠습니다.
      </h2>
      <div className="publishInput">
        <div>제목</div>
        <input className="publishInput-name" onChange={(e)=>{tableparams.setPublishTitle(e.target.value)}} >
        </input>
        <div >신청/문의내용</div>
        <input className="publishInput-text" onChange={(e)=>{tableparams.setPublishText(e.target.value)}} ></input>
      </div>
      <div className="publishbtn">
        <button className="publishbtn-publish" onClick={()=>{tableparams.publishInfo(tableparams.publishTitle)}}
       >등록</button>
        <Link to="/mainqa"><button className="publishbtn-cancel">취소</button></Link>
      </div>
    </div>
  )
}
export default PublishQA;