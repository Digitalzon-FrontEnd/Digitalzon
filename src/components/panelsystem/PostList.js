import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./PostList.css";
import PageList from "./PageList";

const PostList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지
  const postsPerPage = 10; //한 페이지에 글 갯수

  const indexOfLast = currentPage * postsPerPage; // 페이지를 글 갯수만큼 곱해서 보여준게 마지막 페이지넘버
  const indexOfFirst = indexOfLast - postsPerPage; // 마지막페이지 넘버 - 한 페이지의 글 갯수 = 첫번째 페이지 넘버

  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }
  //1부터 10까지의 페이지 포스트?

  return (
    <div>
      <div className="pannelsystem-content">
        <form className="pannelsystem-form">
          <div className="pannelsystem-input-box">
            <input type="text" id="pannelsystem-input" />
            <button className="pannelsystem-input-btn">
              <img src="/img/mdi-magnify.png" alt="검색버튼" />
            </button>
          </div>
        </form>
      </div>
      <table className="pannelsystem-table">
        <thead className="pannelsystem-thead">
          <tr>
            <th>번호</th>
            <th>업체명</th>
            <th>연락처</th>
            <th>이메일</th>
            <th>신청일</th>
            <th>상태변경일</th>
            <th>상태</th>
            <th>상태변경자</th>
          </tr>
        </thead>
        {currentPosts(posts).map((item) => {
          return (
            <tbody className="pannelsystem-tbody">
              <tr key={item.number}>
                <td>{item.number}</td>
                <td>
                  <Link to={`/panel/view/${item.number}`}>{item.name}</Link>
                </td>
                <td>{item.phonenumber}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td>{item.statedate}</td>
                <td>{item.state}</td>
                <td>{item.statemanager}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <PageList
        posts={posts}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PostList;
