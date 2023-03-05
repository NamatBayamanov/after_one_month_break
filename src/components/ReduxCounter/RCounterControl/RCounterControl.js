import { useDispatch } from "react-redux";
import { decrease, increment } from "../../../redux/slices/counterSlice/counterSlice";

function RCounterControl() {
  const dispatch = useDispatch();

  const Increase = (e) => {
    dispatch(increment());
  };

  const Decrease = (e) => {
    dispatch(decrease());
  };

  return ( 
    <div>
      <button onClick={Increase} >
        +
      </button>
      <button onClick={Decrease}>
        -
      </button>
    </div>
  );
}

export default RCounterControl;