import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br />
        <button
          aria-label="Increment value by 100"
          onClick={() => dispatch(incrementByAmount(100))}
        >
          Increment value by 100
        </button>
        <button
          aria-label="Decrement value by 100"
          onClick={() => dispatch(decrementByAmount(100))}
        >
          Decrement value by 100
        </button>
      </div>
    </div>
  );
}
