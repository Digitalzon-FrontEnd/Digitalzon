import React from "react";
import "./Faq.css";

const Faq = () => {
  const slideToggle = (e) => {
    e.target.nextSibling.classList.toggle("slide");
  };
  const changePage = (e) => {
    const category = e.target.dataset.num;
    const questionlist = document.querySelectorAll("dt,dd");
    const showlist = (item) => {
      item.classList.remove("blind");
      item.classList.remove("slide");
    };
    if (category === "0") {
      questionlist.forEach(showlist);
    } else {
      questionlist.forEach((item) => {
        if (item.dataset.category === category) {
          showlist(item);
        } else {
          item.classList.add("blind");
          item.classList.remove("slide");
        }
      });
    }
  };

  return (
    <div className="faq">
      <div className="inner">
        <div className="faq-btn-box">
          <button
            className="faq-btn-categoryAll btn-r btn-b"
            data-num="0"
            onClick={changePage}
          >
            전체
          </button>
          <button
            className="faq-btn-category1 btn-r btn-w"
            data-num="1"
            onClick={changePage}
          >
            카테고리 1
          </button>
          <button
            className="faq-btn-category2 btn-r btn-w"
            data-num="2"
            onClick={changePage}
          >
            카테고리 2
          </button>
          <button
            className="faq-btn-category3 btn-r btn-w"
            data-num="3"
            onClick={changePage}
          >
            카테고리 3
          </button>
        </div>
        <div className="faq-list-title">제목</div>
        <dl className="faq-list-box">
          <dt onClick={slideToggle} data-category="1">
            <span>카테고리1</span>카테고리1의 첫번째 질문인가요?
          </dt>
          <dd data-category="1">네, 카테고리1의 첫번째 질문입니다.</dd>
          <dt onClick={slideToggle} data-category="2">
            <span>카테고리2</span>카테고리2의 첫번째 질문인가요?
          </dt>
          <dd data-category="2">네, 카테고리2의 첫번째 질문입니다.</dd>
          <dt onClick={slideToggle} data-category="3">
            <span>카테고리3</span>카테고리3의 첫번째 질문인가요?
          </dt>
          <dd data-category="3">네, 카테고리3의 첫번째 질문입니다.</dd>
          <dt onClick={slideToggle} data-category="1">
            <span>카테고리1</span>카테고리1의 두번째 질문인가요?
          </dt>
          <dd data-category="1">네, 카테고리1의 두번째 질문입니다.</dd>
        </dl>
      </div>
    </div>
  );
};

export default Faq;
