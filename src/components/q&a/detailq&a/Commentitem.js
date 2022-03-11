import { useRef, useState } from "react";

const CommentItem = ({
  onRemove,
  onEdit,
  id,
  author,
  content,
  emotion,
  created_date
}) => {
  const localContentInput = useRef();
  const [localContent, setLocalContent] = useState(content);
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleClickRemove = () => {
    if (window.confirm(`현재 댓글을 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`현재 댓글을 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="comment">
      <div className="comment-list">
        <span className="author_info">
          관리자 
        </span>
        <span className="date">
          {new Date(created_date).toLocaleDateString().slice(0,-1)}&nbsp;&nbsp;  
          {new Date(created_date).toLocaleTimeString()}
        </span>
        <div className="content">
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>취소</button>
            <button onClick={handleEdit}>완료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={handleClickRemove}>삭제</button>
          </>
        )}
        </div>
      </div>
        <div className="comment-text">
          {isEdit ? (
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          ) : (
            content
          )}
        </div>
    </div>
  );
};
export default CommentItem;