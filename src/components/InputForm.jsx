import { useState } from "react";
import "../styles/InputForm.css";
import Button from "./Button";

const InputForm = ({ addTodoList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div id="input-div">
      <label>제목</label>
      <input
        id="input-title"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Todo List Title"
      />
      <label>내용</label>
      <input
        id="input-content"
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        placeholder="Todo List Content..."
      />
      <Button
        onClick={() => {
          setTitle("");
          setContent("");
          addTodoList(title, content);
        }}
      >
        추가하기
      </Button>
    </div>
  );
};

export default InputForm;
