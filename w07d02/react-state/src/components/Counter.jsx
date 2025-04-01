function Counter({ count, handleClickDecrement, handleClickIncrement }) {
  return (
    <div>
      <h3>My counter: {count}</h3>
      <button onClick={handleClickDecrement}>Decrement</button>
      <button onClick={handleClickIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
