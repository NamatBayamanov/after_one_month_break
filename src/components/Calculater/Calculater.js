import classes from "./Calculater.module.scss";
import CalculaterControl from "./CalculaterControl/CalculaterControl";
import CalculaterDisplay from "./CalculaterDisplay/CalculaterDisplay";
import CalculaterField from "./CalculaterField/CalculaterField";
function Calculater() {
  return ( 
    <div className={classes.Calculater} >
      <article>
        <p className={classes.p}>
          It's Calculater Redux's block!
        </p>
        <CalculaterDisplay/>
        <CalculaterControl/>
        <CalculaterField/>
        
      
        
        
      </article>

    </div>
  );
}

export default Calculater;