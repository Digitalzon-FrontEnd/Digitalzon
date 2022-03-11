import React, { useState } from 'react';
import { Link, Route, Switch} from 'react-router-dom'
import './DetailQA.css'


function DetailQA(){
  let [comment,setComment] =useState(['댓글입니다.']
  )
  let [commentInput,setCommentInput] =useState('')
  
  return(
    <div className='detail-qa'>
      <div className='head-list'>
        <div>151</div>
        <div>제목</div>
        <div>홍길동</div>
        <div>2022.02.04</div>
      </div>
      <div className='text-input'>
        내용입력
      </div>
      {
      comment.map(function(a){
        return(
        <div className='comment'>
          <div className='comment-list'>
            <div>관리자</div>
            <div>2022-02-02</div>
            <div>09:02:25</div>
            <button>수정</button>
            <button>삭제</button>
          </div>
          <div className='comment-text'>{a}</div>
        </div>)
      })
       }
      <div className='comment-input'>
        <div>댓글입력</div>
       <form>
          <input onChange={(e)=>{
            setCommentInput(e.target.value)
          }} value={commentInput}></input>
          <button onClick={(e)=>
          { e.preventDefault();
            let newComment = [...comment];
            newComment.unshift(commentInput);
            setComment(newComment);
            setCommentInput("")
          }}>확인</button>
       </form>
      </div>
      <div className='btn-list'>
        <button>수정</button>
        <button>삭제</button>
        <Link to="/mainqa"><button>목록</button></Link>
      </div>
    </div>
  )
}
export default DetailQA;