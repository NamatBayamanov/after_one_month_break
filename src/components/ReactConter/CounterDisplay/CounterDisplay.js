import classes from "./CounterDisplay.module.scss";
function CounterDisplay({number}) {
  return ( 
    <div className={classes.CounterDisplay} >
      <div className={classes.container}>
        <input value={number} onChange={() => {}} />
      </div>
    </div>
  );
}

export default CounterDisplay;