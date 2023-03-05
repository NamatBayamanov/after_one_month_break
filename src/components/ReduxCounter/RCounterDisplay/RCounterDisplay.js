import { useSelector } from "react-redux";

function RCounterDisplay() {
  const number = useSelector(store => store.counter.number);
  // console.log(number);
  return ( 
    <div>
      {number}
    </div>
  );
}

export default RCounterDisplay;