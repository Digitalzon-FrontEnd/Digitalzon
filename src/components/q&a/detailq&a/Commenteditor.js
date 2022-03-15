import { useRef, useState } from "react";

const CommentEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (state.content.length < 3) {
      contentInput.current.focus();
      return;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장");
    setState({
      author: "",
      content: "",
      emotion: 1
    });
  };

  return (
      <div className="comment-input">
        <p>댓글입력</p>
        <div>
          <input
            value={state.content}
            onChange={handleChangeState}
            name="content"
            type="text"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>확인</button>
        </div>
      </div>
  );
};
export default CommentEditor;