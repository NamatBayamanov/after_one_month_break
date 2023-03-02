function CounterSet({number, control}) {
  const zeroing = () => {
    control(number = 0);
  };
  return ( 
    <div>
      <button onClick={zeroing} >
        Reset
      </button>
    </div>
  );
}

export default CounterSet;