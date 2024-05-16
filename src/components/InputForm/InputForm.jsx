import { useState } from "react";
import Button from "../Button";
import "./InputForm.css";

const InputForm = ({ addTodoList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const changeInputTitleText = (e) => setTitle(e.target.value);
  const changeInputContentText = (e) => setContent(e.target.value);

  const handleClickInputButton = () => {
    // 빈 문자열 입력 시 alert
    if (!(title.length && content.length)) {
      return alert("Todo List의 제목과 내용을 적어주세요❗");
    } else {
      setTitle("");
      setContent("");
      addTodoList(title, content);
    }
  };

  return (
    <div id="input-div">
      <label htmlFor="input-title">제목</label>
      <input id="input-title" type="text" value={title} onChange={changeInputTitleText} placeholder="Todo List Title" />
      <label htmlFor="input-content">내용</label>
      <input
        id="input-content"
        type="text"
        value={content}
        onChange={changeInputContentText}
        placeholder="Todo List Content..."
      />
      <Button onClick={handleClickInputButton}>추가하기</Button>
    </div>
  );
};

export default InputForm;
