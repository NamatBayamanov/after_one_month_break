import { useState } from "react";
import CounterControl from "./CounterControl/CounterControl";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import CounterSet from "./CounterSet/CounterSet";

function Counter() {

  const [number, setNumber] = useState(0);

  return ( 
    <div>
      <CounterDisplay number={number} />
      <CounterControl control={setNumber} number={number}/>
      <CounterSet control={setNumber} number={number} />
    </div>
  );
}

export default Counter;