import Calculater from "./components/Calculater/Calculater";
import Counter from "./components/ReactConter/Counter";
import ReduxCounter from "./components/ReduxCounter/ReduxCounter";

function App() {
  return (
    <div className="App">
      <Counter/>
      <ReduxCounter/>
      <Calculater/>
    </div>
  );
}

export default App;
