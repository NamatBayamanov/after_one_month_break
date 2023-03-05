import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../../../redux/slices/calculaterSlice/calculaterSlice";


function CalculaterControl() {
  const dispatch = useDispatch();

  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };
  const Reset = () => {
    dispatch(reset());
  };
  
  return (
    <div>
      <button onClick={Increment} >+</button>
      <button onClick={Reset}>reset</button>
      <button onClick={Decrement} >-</button>
    </div>
  );
}

export default CalculaterControl;



