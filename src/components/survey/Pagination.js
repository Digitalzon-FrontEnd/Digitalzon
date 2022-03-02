import React from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination-ul">
          <img
            className="pagination-list-previous"
            src="/img/eva-arrow-ios-back-outline.png"
            alt="이전 목록 보기"
          />
          {pageNumbers.map((number) => (
            <li key={number} className="pagination-item">
              <span onClick={() => paginate(number)}>{number}</span>
            </li>
          ))}
          <img
            className="pagination-list-next"
            src="/img/eva-arrow-ios-back-outline.png"
            alt="다음 목록 보기"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
