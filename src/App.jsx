import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ListSection from "./components/ListSection";

function App() {
  // 로컬 스토리지에서 todo list 데이터 불러오기
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todo-list")) ?? []);

  // 로컬 스토리지에 todo list 데이터 저장하기
  const saveTodoList = (lst) => localStorage.setItem("todo-list", JSON.stringify(lst));

  // todo list 추가
  const addTodoList = (title, content) => {
    const newTodoList = {
      id: new Date().getTime(),
      title: title,
      content: content,
      isCompleted: false
    };

    saveTodoList([...todoList, newTodoList]);
    setTodoList([...todoList, newTodoList]);
  };

  // todo list 삭제
  const deleteTodoList = (id) => {
    const deletedTodoList = todoList.filter((item) => item.id !== id);

    saveTodoList(deletedTodoList);
    setTodoList(deletedTodoList);
  };

  // todo list 상태 변환
  const changeListState = (id) => {
    const todoListState = todoList.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item));

    saveTodoList(todoListState);
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
