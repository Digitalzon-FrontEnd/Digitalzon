import { useRef, useState } from "react";
import CommentEditor from "./Commenteditor";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import './DetailQA.css'

const DetailQA1 = ({location}) => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newCommentList = data.filter((it) => it.id !== targetId);
    setData(newCommentList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  const params = location.state;
  return (
    <div className="detail-qa">
      <div className='head-list'>
        <div id="item1">{params.번호}</div>
        <div id="item2">{params.제목}</div>
        <div id="item3">{params.등록자}</div>
        <div id="item4">{params.등록일}</div>
      </div>
      <div className='text-input'>
        내용입력
      </div>
      <CommentList onEdit={onEdit} onRemove={onRemove} CommentList={data} />
      <CommentEditor onCreate={onCreate} />
      <div className='btn-list'>
        <button>수정</button>
        <button>삭제</button>
        <Link to="/mainqa"><button>목록</button></Link>
      </div>
    </div>
  );
};
export default DetailQA1;

