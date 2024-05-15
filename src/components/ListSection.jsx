import "../styles/ListSection.css";
import ListItem from "./ListItem";

const ListSection = ({ children, isCompleted, todoList, deleteTodoList, changeListState }) => {
  return (
    <section>
      <h1>{children}</h1>
      <ul>
        {todoList
          .filter((i) => {
            return i.isCompleted === isCompleted;
          })
          .map((item) => {
            return (
              <ListItem key={item.id} item={item} deleteTodoList={deleteTodoList} changeListState={changeListState} />
            );
          })}
      </ul>
    </section>
  );
};

export default ListSection;
