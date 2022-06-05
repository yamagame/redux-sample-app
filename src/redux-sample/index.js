const { createStore, combineReducers } = require("redux");

function page(state = 0, action) {
  switch (action.type) {
    case "PAGE/INCREMENT":
      return state + 1;
    case "PAGE/DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function content(state = 0, action) {
  switch (action.type) {
    case "CONTENT/INCREMENT":
      return state + 1;
    case "CONTENT/DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const reducers = combineReducers({ page, content });
const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "CONTENT/INCREMENT" });
store.dispatch({ type: "CONTENT/DECREMENT" });
store.dispatch({ type: "PAGE/INCREMENT" });
store.dispatch({ type: "PAGE/DECREMENT" });
