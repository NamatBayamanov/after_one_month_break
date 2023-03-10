import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addText,
  completedText,
  removeText,
} from "../../redux/slices/reduxTodoSlice/reduxTodoSlice";
import classes from "./ReduxTodoList.module.scss";
function ReduxTodoList() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector(store => store.reduxTodos.todos);

  const OnClick = (e) => {
    if (text === "") return;
    dispatch(
      addText({
        info: {
          id: new Date().getMilliseconds(),
          completed: false,
          text: text,
        },
      })
    );
    setText("");
  };
  const OnClick2 = (e) => {
    if (text === "") return;
    if (e.key === "Enter") {
      dispatch(
        addText({
          info: {
            id: new Date().getMilliseconds(),
            completed: false,
            text: text,
          },
        })
      );
      setText("");
    }
  };
  const RemoveText = (id) => {
    dispatch(removeText({ id }));
  };
  const CompletedText = (id) => {
    dispatch(completedText({ id }));
  };

  let out = todos.map((currentValue_itIsInfoFromRexux, index, arr) => {
    return (
      <li
        key={currentValue_itIsInfoFromRexux.id}
        id={currentValue_itIsInfoFromRexux.id}
        className={classes.out}
      >
        <span
          className={
            currentValue_itIsInfoFromRexux.completed
              ? `${classes.span} ${classes.strike}`
              : `${classes.span}`
          }
          onClick={() => CompletedText(currentValue_itIsInfoFromRexux.id)}
        >
          {currentValue_itIsInfoFromRexux.text}
        </span>
        <button onClick={() => RemoveText(currentValue_itIsInfoFromRexux.id)}>
          &times;
        </button>
      </li>
    );
  });
  return (
    <div className={classes.ReduxTodoList}>
      <h2>It's onlu Redux block without async acts.</h2>

      <div>
        <input
          name="todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={OnClick2}
        />
        <button onClick={OnClick}>add</button>
        <button onClick={() => setText("")}>reset</button>
      </div>
      <ul>{out}</ul>
    </div>
  );
}

export default ReduxTodoList;
