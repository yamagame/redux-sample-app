import React from "react";
import { CounterGroup } from "component/CounterGroup";
import {
  AppStateCounter,
  ComponentStateCounter,
  GlobalStateCounter0,
  GlobalStateCounter1,
  GlobalStateCounter2,
  GlobalStateCounter3,
  AsyncStateCounter0,
  AsyncStateCounter1,
  AsyncStateCounter2,
  AsyncStateCounter3,
} from "component/Counter";

function App() {
  const [count, setCount] = React.useState(0);
  const appStateProps = { count, setCount };
  return (
    <div>
      <CounterGroup title="Component State">
        <ComponentStateCounter />
        <ComponentStateCounter />
        <ComponentStateCounter />
        <ComponentStateCounter />
      </CounterGroup>

      <CounterGroup title="App State">
        <AppStateCounter count={count} setCount={setCount} />
        <AppStateCounter count={count} setCount={setCount} />
        <AppStateCounter {...{ count, setCount }} />
        <AppStateCounter {...appStateProps} />
      </CounterGroup>

      <CounterGroup title="Global State">
        <GlobalStateCounter0 />
        <GlobalStateCounter1 />
        <GlobalStateCounter2 />
        <GlobalStateCounter3 />
      </CounterGroup>

      <CounterGroup title="Async State">
        <AsyncStateCounter0 />
        <AsyncStateCounter1 />
        <AsyncStateCounter2 />
        <AsyncStateCounter3 />
      </CounterGroup>
    </div>
  );
}

export default App;
