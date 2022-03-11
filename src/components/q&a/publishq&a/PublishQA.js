import React, { useRef, useState } from 'react';
import './PublishQA.css'
import {Link} from 'react-router-dom'
import MainQA from "../mainq&a/MainQA";
import { useHistory } from 'react-router-dom';

function PublishQA({tableInfo, setTableInfo}){
  const [publishTitle,setPublishTitle] = useState('')
  const [publishText,setPublishText] = useState('')
  const publishTitleInput = useRef();
  const publishTextInput = useRef();
  const history = useHistory();
  const created_date = new Date();
  function publishInfo(){
    const newPublishTitle = [...tableInfo];
    newPublishTitle.unshift({ 번호 :tableInfo.length+1,
    제목 : publishTitleInput.current.value,
    등록일 :created_date.toLocaleDateString().slice(0,-1),
    등록자 : '홍길동',
    내용: publishTextInput.current.value
})
    setTableInfo(newPublishTitle)
    alert('질문이 등록되었습니다.')
    history.push("/mainqa")
  }
  console.log(tableInfo);
  return(
    <div className="publish-qa">
      <h1 className="qa-head1">Q&A등록</h1>
      <h2 className="qa-head2">설문 관련하여 궁금하신 점을 아래에 작성해주시면<br/>
        최대한 빠른 시간 내 답변을 등록하겠습니다.
      </h2>
      <div className="publishInput">
        <div>제목</div>
        <input className="publishInput-name" onChange={(e)=>{setPublishTitle(e.target.value)}} ref={publishTitleInput} >
        </input>
        <div >신청/문의내용</div>
        <input className="publishInput-text" onChange={(e)=>{setPublishText(e.target.value)}} ref={publishTextInput}></input>
      </div>
      <div className="publishbtn">
        <button className="publishbtn-publish" onClick={publishInfo}>등록</button>
        <Link to="/mainqa"><button className="publishbtn-cancel">취소</button></Link>
      </div>
    </div>
  )
}
export default PublishQA;