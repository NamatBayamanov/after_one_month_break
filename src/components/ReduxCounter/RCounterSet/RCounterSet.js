import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../../redux/slices/counterSlice/counterSlice";
import classes from "./RCounterSet.module.scss";
function RCounterSet() {
  const number = useSelector(store => store.counter.number);
  const dispatch = useDispatch();
  const Reset = (e) => {
    let zero = 0;
    dispatch(reset({zero}));
  };

  return ( 
    <div className={classes.RCounterSet}>
      <button onClick={Reset} >
        Reset from Redux
      </button>
    </div>
  );
}

export default RCounterSet;