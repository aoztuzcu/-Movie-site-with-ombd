import { useReducer } from "react";
import Button from "@/components/Button";
function counterReducer(state, action) {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return 0;
  } else {
    throw new Error();
  }
}
const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <h1>{count}</h1>
      <Button onClick={() => dispatch("increment")}>+</Button>
      <Button onClick={() => dispatch("decrement")}>-</Button>
      <Button onClick={() => dispatch("reset")}>Reset</Button>
    </>
  );
};

export default Counter;
