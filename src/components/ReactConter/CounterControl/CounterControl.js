function CounterControl({number, control}) {

  const increment = (e) => {
    control(number + 1);
  };
  const decrement = (e) => {
    control(number - 1);
  };

  return ( 
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default CounterControl;