import { useState } from "react";
import classes from "./ReactTodoList.module.scss";
function ReactTodoList() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const AccessTodo = (e) => {
    setText(e.target.value);
  };

  const AddTodo = (e) => {
    if (text === "") return;
    setTodo([
      { id: new Date().getMilliseconds(), completed: false, text: text },
      ...todo,
    ]);
    setText("");
  };
  const RemoveBut = (id) => {
    setTodo([...todo.filter((el) => el.id !== id)]);
  };

  let out = todo.map((currentValue, index, arr) => {

    const ButtonCompleted = (id) => {
      setTodo([
        ...todo.map((currentValue, index, arr) =>
          currentValue.id === id
            ? { ...currentValue, completed: !currentValue.completed }
            : { ...currentValue }
        ),
      ]);
    };

    return (
      <li key={currentValue.id} id={currentValue.id} className={classes.out} >
        <span
          onClick={() => ButtonCompleted(currentValue.id)}
          className={
            currentValue.completed
              ? `${classes.text} ${classes.strike}`
              : `${classes.text}`
          }
        >
          {currentValue.text}
        </span>
        <button onClick={() => RemoveBut(currentValue.id)}>&times;</button>
      </li>
    );
  });

  const setValue = (e) => {
    if (text === "") return;
    if (e.key === "Enter") {
      setTodo([
        { id: new Date().getMilliseconds(), completed: false, text: text },
        ...todo,
      ]);
      setText("");
    }
  };

  const RemoveText = (e) => {
    setText("");
  };

  return (
    <div className={classes.ReactTodoList}>
      <h2>It's only React block without async acts.</h2>
      <div>
        <input
          name="todo"
          type="text"
          value={text}
          onChange={AccessTodo}
          onKeyDown={setValue}
        />
        <button onClick={AddTodo}>Click me to set</button>
        <button onClick={() => setText('')}>Click me to remove</button>
      </div>

      <ul>{out}</ul>
    </div>
  );
}

export default ReactTodoList;
