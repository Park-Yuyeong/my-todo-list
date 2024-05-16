import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ListSection from "./components/ListSection";

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo-list")) ?? []);

  // todo list 추가
  const addTodoList = (title, content) => {
    const newTodoList = {
      id: new Date().getTime(),
      title: title,
      content: content,
      isCompleted: false
    };

    localStorage.setItem("todo-list", JSON.stringify([...todoList, newTodoList]));
    setTodoList([...todoList, newTodoList]);
  };

  // todo list 삭제
  const deleteTodoList = (id) => {
    const deletedTodoList = todoList.filter((item) => item.id !== id);
    localStorage.setItem("todo-list", JSON.stringify(deletedTodoList));
    setTodoList(deletedTodoList);
  };

  // todo list 상태 변환
  const changeListState = (id) => {
    const todoListState = todoList.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item));

    localStorage.setItem("todo-list", JSON.stringify(todoListState));
    setTodoList(todoListState);
  };

  return (
    <main>
      <Header />
      <InputForm addTodoList={addTodoList} />
      <div id="list-div">
        <ListSection
          isCompleted={false}
          todoList={todoList}
          deleteTodoList={deleteTodoList}
          changeListState={changeListState}
        >
          Working...📍
        </ListSection>
        <ListSection
          isCompleted={true}
          todoList={todoList}
          deleteTodoList={deleteTodoList}
          changeListState={changeListState}
        >
          Done...!🎉
        </ListSection>
      </div>
    </main>
  );
}

export default App;
