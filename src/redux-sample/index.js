const { createStore, combineReducers } = require("redux");

const initialCounter1 = { value: 0, tag: "init" };

function counter1(state = initialCounter1, action) {
  switch (action.type) {
    case "COUNTER1/INCREMENT":
      return { value: state.value + 1, tag: action.payload };
    case "COUNTER1/DECREMENT":
      return { value: state.value - 1, tag: action.payload };
    default:
      return state;
  }
}

const initialCounter2 = { value: 0, tag: "init" };

function counter2(state = initialCounter2, action) {
  switch (action.type) {
    case "COUNTER2/INCREMENT":
      return { value: state.value + 1, tag: action.payload };
    case "COUNTER2/DECREMENT":
      return { value: state.value - 1, tag: action.payload };
    default:
      return state;
  }
}

const reducers = combineReducers({ counter1, counter2 });
const store = createStore(reducers);

// 購読開始
const unsubscribe1 = store.subscribe(() => {
  console.log("----- subscribe1");
  console.log(store.getState());
});
const unsubscribe2 = store.subscribe(() => {
  console.log("----- subscribe2");
  console.log(store.getState());
});

// 配信
store.dispatch({ type: "COUNTER1/INCREMENT", payload: "step1" });
store.dispatch({ type: "COUNTER1/DECREMENT", payload: "step2" });

// 購読停止
unsubscribe1();

// 配信
store.dispatch({ type: "COUNTER2/INCREMENT", payload: "step3" });

// 購読停止
unsubscribe2();

// 配信
store.dispatch({ type: "COUNTER1/INCREMENT", payload: "step4" });
