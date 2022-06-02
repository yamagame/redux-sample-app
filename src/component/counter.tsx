import React from "react";
import { useAppDispatch, useAppSelector } from "store";
import { applicationSelector } from "store/selector";
import { actions } from "features/application";

const style = {
  border: "solid 1px #CCC",
  display: "inline-block",
  padding: 10,
  margin: 10,
};

export function ComponentStateCounter() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={style}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>count up</button>
    </div>
  );
}

export function GlobalStateCounter() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(actions.increment())}>count up</button>
    </div>
  );
}
