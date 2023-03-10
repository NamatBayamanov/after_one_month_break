import Calculater from "./components/Calculater/Calculater";
import Counter from "./components/ReactConter/Counter";
import ReactTodoList from "./components/ReactTodoList/ReactTodoList";
import ReduxCounter from "./components/ReduxCounter/ReduxCounter";
import ReduxTodoList from "./components/ReduxTodoList/ReduxTodoList";

function App() {
  return (
    <div className="App">
      <Counter/>
      <ReduxCounter/>
      <Calculater/>
      <ReactTodoList/>
      <ReduxTodoList/>
    </div>
  );
}

export default App;
