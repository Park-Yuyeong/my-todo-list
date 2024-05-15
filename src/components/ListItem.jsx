import "../styles/ListItem.css";
import Button from "./Button";

const ListItem = ({ item, deleteTodoList, changeListState }) => {
  const { id, title, content, isCompleted } = item;
  return (
    <div id="todo-item">
      <h3>{title}</h3>
      <p>{content}</p>
      <div id="button-div">
        <Button onClick={() => deleteTodoList(id)}>삭제하기</Button>
        <Button onClick={() => changeListState(id)}>{isCompleted ? "취소" : "완료"}</Button>
      </div>
    </div>
  );
};

export default ListItem;
