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
