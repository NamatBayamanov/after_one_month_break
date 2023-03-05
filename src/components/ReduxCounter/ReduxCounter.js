import classes from "./ReduxCounter.module.scss";
import RCounterControl from "./RCounterControl/RCounterControl";
import RCounterDisplay from "./RCounterDisplay/RCounterDisplay";
import RCounterSet from "./RCounterSet/RCounterSet";

function ReduxCounter() {
  return ( 
    <div className={classes.ReduxCounter} >
      <div className={classes.block}>
        It is Redux block!
      </div>
      <RCounterDisplay/>
      <RCounterControl/>
      <RCounterSet/>
    </div>
  );
}

export default ReduxCounter;