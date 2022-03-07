import React, { useState } from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate, setIndex }) => {
  const [currenntIndex, setCurrenntIndex] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  function minusCurrenntIndex(currenntIndex) {
    return new Promise(function (resolve, reject) {
      if (currenntIndex > 1) {
        const idx = currenntIndex - 1;
        setCurrenntIndex(idx);
      }
    });
  }
  minusCurrenntIndex().then(paginate(currenntIndex));

  function plusCurrenntIndex(currenntIndex) {
    return new Promise(function (resolve, reject) {
      if (currenntIndex < pageNumbers.length) {
        const idx = currenntIndex + 1;
        setCurrenntIndex(idx);
      }
    });
  }
  plusCurrenntIndex().then(paginate(currenntIndex));

  return (
    <div>
      <nav>
        <ul className="pagination-ul">
          <img
            className="pagination-list-previous"
            src="/img/eva-arrow-ios-back-outline.png"
            alt="이전 목록 보기"
            onClick={() => {
              minusCurrenntIndex(currenntIndex);
              setIndex(null);
            }}
          />
          {pageNumbers.map((number) => (
            <li key={number} className="pagination-item">
              <span
                onClick={() => {
                  paginate(number);
                  setCurrenntIndex(number);
                  setIndex(null);
                }}
              >
                {number}
              </span>
            </li>
          ))}
          <img
            className="pagination-list-next"
            src="/img/eva-arrow-ios-back-outline.png"
            alt="다음 목록 보기"
            onClick={() => {
              plusCurrenntIndex(currenntIndex);
              setIndex(null);
            }}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

/* 
페이징 
   root에서 내려줘야할 props 
    - posts={currentPosts(posts)}  10개씩 자른 데이터 
    - postsPerPage={postsPerPage}  한 화면에 볼 수 있는 설문 개수
    - totalPosts={posts.length} 데이터 수 
    - paginate={setCurrentPage} 현재 페이지 위치  
*/
