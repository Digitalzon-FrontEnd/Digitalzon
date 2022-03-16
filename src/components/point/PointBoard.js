import React, { useState, useEffect } from "react";
import "./PointBoard.css";
import Gnb from "./../common/Gnb";
import PointList from "./PointList";
import Pagination from "./../common/Pagination";
const PointBoard = ({ pointItems, setSelectPointItem }) => {
  const onPointClick = (item) => {
    setSelectPointItem(item);
  };

  const [searchedItems, setSearchedItems] = useState(pointItems);
  const [selectState, setSelectState] = useState();
  const [selectStartDate, setSelectStartDate] = useState();
  const [selectEndDate, setSelectEndDate] = useState();
  const [searchText, setSearchText] = useState();
  const [currentPage, setCurrentPage] = useState(); //현재 페이지
  const postsPerPage = 10; //한 페이지에 글 갯수

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, []);

  console.log("currentPage:", currentPage);

  const indexOfLast = currentPage * postsPerPage; // 페이지를 글 갯수만큼 곱해서 보여준게 마지막 페이지넘버
  const indexOfFirst = indexOfLast - postsPerPage; // 마지막페이지 넘버 - 한 페이지의 글 갯수 = 첫번째 페이지 넘버

  function currentPosts(posts) {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const onChangeHandler = (e) => {
    setSelectState(e.target.value);
    if (e.target.value === "선택") console.log(e.target.value);
    else {
      setSelectState(e.target.value);
    }
  };
  const onSearchHandler = (e) => {
    let tmpItems = [...pointItems];

    if (!isEmpty(selectStartDate)) {
      tmpItems = tmpItems.filter((item) => {
        if (item.applyDate >= selectStartDate) {
          return item;
        }
      });
    }
    if (!isEmpty(selectEndDate)) {
      tmpItems = tmpItems.filter((item) => {
        if (item.applyDate <= selectEndDate) {
          return item;
        }
      });
    }

    if (!isEmpty(selectState)) {
      tmpItems = tmpItems.filter((item) => {
        if (item.status === selectState) {
          return item;
        }
      });
    }
    if (!isEmpty(searchText)) {
      tmpItems = tmpItems.filter((item) => {
        if (item.companyName.indexOf(searchText) !== -1) {
          return item;
        }
      });
    }
    console.log("tmpItems:", tmpItems);
    setSearchedItems(tmpItems);
  };
  const onStartDateHandler = (e) => {
    setSelectStartDate(e.target.value);
  };
  const onEndDateHandler = (e) => {
    setSelectEndDate(e.target.value);
  };

  const onSearchTextHandler = (e) => {
    setSearchText(e.target.value);
  };
  const isEmpty = function (value) {
    if (
      value == "" ||
      value == null ||
      value == undefined ||
      (value != null && typeof value == "object" && !Object.keys(value).length)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSearchEnter = (e) => {
    if (e.key === "Enter") {
      onSearchHandler();
    }
  };

  return (
    <div className="inner">
      <Gnb />

      <div className="point-board-box">
        <span className="point-board-select-box">
          <span className="input_date_box">
            <span className="input_date_title">일시</span>
            <input
              className="start-date"
              type="date"
              onChange={onStartDateHandler}
            />
            <span className="between-char">~</span>
            <input
              className="end-date"
              type="date"
              onChange={onEndDateHandler}
            />
            <span className="point-refund-select-box">구분</span>
          </span>
          <span className="select-wrap">
            <select name="status" onChange={onChangeHandler}>
              <option value=""> 선택 </option>
              <option value="환불">환불</option>

              <option value="환불신청">환불신청</option>
              <option value="충전">충전</option>
              <option value="환불완료">환불완료</option>
            </select>
          </span>
          <span className="point-board-search-box">
            <input
              type="text"
              id="search-box"
              onChange={onSearchTextHandler}
              onKeyPress={onSearchEnter}
            />
            <label for="search-box" onClick={onSearchHandler}>
              검색
            </label>
          </span>
          <button id="search-btn" onClick={onSearchHandler} className="btn-o">
            검색
          </button>
        </span>
        <PointList
          pointItems={currentPosts(searchedItems)}
          onPointClick={onPointClick}
        />
        {!searchedItems.length ? (
          <div className="no-result">게시물이 없습니다.</div>
        ) : null}

        <Pagination
          postsPerPage={postsPerPage}
          // totalPosts={searchedItems.length > 0 ? searchedItems.length : 1}
          totalPosts={searchedItems.length > 0 ? searchedItems.length : 1}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PointBoard;
