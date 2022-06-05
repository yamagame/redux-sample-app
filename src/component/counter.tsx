import React from "react";
import { useAppDispatch, useAppSelector, store, RootState } from "store";
import { applicationSelector } from "store/selector";
import { actions } from "features/application";
import { ReactReduxContext } from "react-redux";

const style = {
  border: "solid 1px #CCC",
  display: "inline-block",
  padding: 10,
  margin: 10,
};

const wait = async (sec: number, callback: () => void) => {
  return new Promise((res) => {
    setTimeout(() => {
      callback();
      res(0);
    }, sec * 1000);
  });
};

export type AppStateCounterProps = {
  count: number;
  setCount: (value: number) => void;
};

export function AppStateCounter(props: AppStateCounterProps) {
  const { count, setCount } = props;
  console.log(`render: ${AppStateCounter.name}`);
  return (
    <div style={style}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>count up</button>
    </div>
  );
}

export function ComponentStateCounter() {
  const [count, setCount] = React.useState(0);
  console.log(`render: ${ComponentStateCounter.name}`);
  return (
    <div style={style}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>count up</button>
    </div>
  );
}

export function GlobalStateCounter0() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = { type: "application/increment" };
  // const action = { type: "application/setCount", payload: state.count + 1 };
  console.log(`render: ${GlobalStateCounter0.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action)}>count up</button>
    </div>
  );
}

export function GlobalStateCounter1() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = actions.increment();
  // const action = actions.setCount(state.count + 1);
  console.log(`render: ${GlobalStateCounter1.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action)}>count up</button>
    </div>
  );
}

export function GlobalStateCounter2() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = () => actions.setCount(state.count + 1);
  console.log(`render: ${GlobalStateCounter2.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action())}>count up</button>
    </div>
  );
}

export function GlobalStateCounter3() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = React.useCallback(() => {
    return actions.setCount(state.count + 1);
  }, [state.count]);
  console.log(`render: ${GlobalStateCounter3.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action())}>count up</button>
    </div>
  );
}

export function GlobalStateCounter4() {
  const { store } = React.useContext(ReactReduxContext);
  const state = React.useSyncExternalStore<RootState>(
    store.subscribe,
    store.getState
  );
  const dispatch = useAppDispatch();
  const action = { type: "application/increment" };
  console.log(`render: ${GlobalStateCounter4.name}`);
  return (
    <div style={style}>
      <div>{state.application.count}</div>
      <button onClick={() => dispatch(action)}>count up</button>
    </div>
  );
}

export function AsyncStateCounter0() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = async (dispatch: ReturnType<typeof useAppDispatch>) => {
    await wait(1, () => {
      const nextCount = state.count + 1;
      if (nextCount > 3) {
        dispatch(actions.reset());
      } else {
        dispatch(actions.setCount(nextCount));
      }
    });
  };
  console.log(`render: ${AsyncStateCounter0.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action)}>count up</button>
    </div>
  );
}

export function AsyncStateCounter1() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = async (
    dispatch: ReturnType<typeof useAppDispatch>,
    getState: typeof store.getState
  ) => {
    await wait(1, () => {
      const nextCount = getState().application.count + 1;
      if (nextCount > 3) {
        dispatch(actions.reset());
      } else {
        dispatch(actions.setCount(nextCount));
      }
    });
  };
  console.log(`render: ${AsyncStateCounter1.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action)}>count up</button>
    </div>
  );
}

export function AsyncStateCounter2() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = React.useCallback(
    () => async (dispatch: ReturnType<typeof useAppDispatch>) => {
      await wait(1, () => {
        const nextCount = state.count + 1;
        if (nextCount > 3) {
          dispatch(actions.reset());
        } else {
          dispatch(actions.increment());
        }
      });
    },
    [state.count]
  );
  console.log(`render: ${AsyncStateCounter2.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button onClick={() => dispatch(action())}>count up</button>
    </div>
  );
}

export function AsyncStateCounter3() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(applicationSelector);
  const action = async (
    dispatch: ReturnType<typeof useAppDispatch>,
    getState: typeof store.getState
  ) => {
    await wait(1, () => {
      const nextCount = getState().application.count + 1;
      dispatch(actions.setCount(nextCount));
    });
    if (
      getState().application.count >= 5 &&
      getState().application.count < 10
    ) {
      await wait(1, () => {
        dispatch(actions.increment());
      });
      console.log(getState().application.count, "p1");
      await wait(1, () => {
        dispatch(actions.increment());
      });
      console.log(getState().application.count, "p2");
      await wait(1, () => {
        dispatch(actions.increment());
      });
      console.log(getState().application.count, "p3");
    }
  };
  console.log(`render: ${AsyncStateCounter3.name}`);
  return (
    <div style={style}>
      <div>{state.count}</div>
      <button
        onClick={async () => {
          console.log("Click");
          await dispatch(action);
          console.log("OK");
        }}
      >
        count up
      </button>
    </div>
  );
}
