import { useRef, useState } from "react";
import CommentEditor from "./Commenteditor";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import './DetailQA.css'
import { useHistory } from 'react-router-dom';

const DetailQA1 = ({location,tableInfo,setTableInfo}) => {
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
  const history = useHistory();
  const tableRemove =()=>{
    const newTable = tableInfo.filter((it)=> it.num !== params.num);
    setTableInfo(newTable)
    alert('질문이 삭제되었습니다.')
    history.push("/mainqa")
  };
  const tableEdit = ( newContent) => {
    setTableInfo(
      tableInfo.map((it) =>
        it.num === params.num ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="detail-qa">
      <div className='head-list'>
        <div id="item1">{params.num}</div>
        <div id="item2">{params.title}</div>
        <div id="item3">{params.date}</div>
        <div id="item4">{params.user}</div>
      </div>
      <div className='text-input'>
        {params.content}
      </div>
      <CommentList onEdit={onEdit} onRemove={onRemove} CommentList={data} />
      <CommentEditor onCreate={onCreate} />
      <div className='btn-list'>
        <button onClick={tableEdit}>수정</button>
        <button onClick={tableRemove} >삭제</button>
        <Link to="/mainqa"><button>목록</button></Link>
      </div>
    </div>
  );
};
export default DetailQA1;

