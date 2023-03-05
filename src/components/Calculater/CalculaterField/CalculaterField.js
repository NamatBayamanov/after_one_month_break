import { useState } from "react";
import { useDispatch } from "react-redux";
import {reset, set,} from "../../../redux/slices/calculaterSlice/calculaterSlice";

function CalculaterField() {
  const [numbers, setNumbers] = useState(0);
  const dispatch = useDispatch();

  const Set = (e) => {
    dispatch(set({ numbers }));
  };

  const CTR = (e) => {
    setNumbers(0);
    dispatch(reset());
  };

  return (
      <div>
        <input
          type="number"
          name="num"
          value={numbers}
          onChange={({ target }) => setNumbers(target.value)}
        />
        <button onClick={Set}>Set</button>
        <button onClick={CTR} onChange={() => {}}>
          ctr
        </button>
      </div>
  );
}

export default CalculaterField;
