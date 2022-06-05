import React from "react";
import { Group } from "component/Group";
import {
  AppStateCounter,
  ComponentStateCounter,
  GlobalStateCounter0,
  GlobalStateCounter1,
  GlobalStateCounter2,
  GlobalStateCounter3,
  GlobalStateCounter4,
  AsyncStateCounter0,
  AsyncStateCounter1,
  AsyncStateCounter2,
  AsyncStateCounter3,
} from "component/Counter";
import { backgroundColorContext } from "context/BackgroundColor";

const style = {
  border: "solid 1px #CCC",
  display: "inline-block",
  padding: 10,
  margin: 10,
};

function App() {
  const { backgroundColor, setBackgroundColor } = React.useContext(
    backgroundColorContext
  );
  const [count, setCount] = React.useState(0);
  const appStateProps = { count, setCount };
  return (
    <div style={{ backgroundColor }}>
      <Group title="Component State">
        <ComponentStateCounter />
        <ComponentStateCounter />
        <ComponentStateCounter />
        <ComponentStateCounter />
      </Group>

      <Group title="App State">
        <AppStateCounter count={count} setCount={setCount} />
        <AppStateCounter count={count} setCount={setCount} />
        <AppStateCounter {...{ count, setCount }} />
        <AppStateCounter {...appStateProps} />
      </Group>

      <Group title="Global State">
        <GlobalStateCounter0 />
        <GlobalStateCounter1 />
        <GlobalStateCounter2 />
        <GlobalStateCounter3 />
      </Group>

      <Group title="Async State">
        <AsyncStateCounter0 />
        <AsyncStateCounter1 />
        <AsyncStateCounter2 />
        <AsyncStateCounter3 />
      </Group>

      <Group title="Background Color">
        <div style={style}>
          <button onClick={() => setBackgroundColor("#FFF")}>白</button>
        </div>
        <div style={style}>
          <button onClick={() => setBackgroundColor("#FEE")}>赤</button>
        </div>
        <div style={style}>
          <button onClick={() => setBackgroundColor("#EEF")}>青</button>
        </div>
      </Group>
    </div>
  );
}

export default App;
