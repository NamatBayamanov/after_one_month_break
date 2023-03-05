import { useSelector } from "react-redux";
import classes from "./CalculaterDisplay.module.scss";
function CalculaterDisplay() {
  const number = useSelector(store => store.calculater.number);
  return ( 
    <div className={classes.CalculaterDisplay} >
      <h2>
        {number}
      </h2>
    </div>
  );
}

export default CalculaterDisplay;