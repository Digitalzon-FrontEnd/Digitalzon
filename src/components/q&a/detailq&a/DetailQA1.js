import { useRef, useState } from "react";
import CommentEditor from "./Commenteditor";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import './DetailQA.css'
import { useHistory } from 'react-router-dom';
import Gnb from "../../common/Gnb";
import { iteratee } from "lodash";

const DetailQA1 = ({location,tableInfo,setTableInfo}) => {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
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

  const onEdit = (targetId, newContent, newDate) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent , created_date: newDate} : it
      )
    );
  };

  const params = location.state;
  const history = useHistory();
  const tableRemove =()=>{
    const newTable = tableInfo.filter((it)=> it.num !== params.num);
    setTableInfo(newTable)
    alert('질문이 삭제되었습니다.')
    history.push("/mainqa")
  };
  const tableEdit = (num, newContent) => {
    setTableInfo(
      tableInfo.map((it) =>
        it.num === num ? { ...it, content:newContent} : it
      )
    );
  };
  const [localContent, setLocalContent] = useState(params.content);
  const localContentInput = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const handleEdit = () => {
    if (localContent.length < 1) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`현재 목록을 수정하시겠습니까?`)) {
      tableEdit(params.num, localContent);
      toggleIsEdit()
    }
  };
  return (
    <div className="detail-qa">
      <Gnb/>
      <div className="table">
        <div className='head-list'>
          <div id="item1">{params.num}</div>
          <div id="item2">{params.title}</div>
          <div id="item3">{params.date}</div>
          <div id="item4">{params.user}</div>
        </div>
        <div className='text-input'>
            {isEdit ? (
                <textarea className="content-textarea"
                  ref={localContentInput}
                  value={localContent}
                  onChange={(e) => setLocalContent(e.target.value)}
                />
            ) : (
             localContent
            )}
        </div>
        <CommentList onEdit={onEdit} onRemove={onRemove} CommentList={data} />
        <CommentEditor onCreate={onCreate} />
        <div className='btn-list'>
        {isEdit ? (
          <>
            <button onClick={handleEdit}>완료</button>
            <button onClick={tableRemove} >삭제</button>
            <Link to="/mainqa"><button>목록</button></Link>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={tableRemove} >삭제</button>
            <Link to="/mainqa"><button>목록</button></Link>
          </>
        )}
        </div>
      </div>
    </div>
  );
};
export default DetailQA1;

