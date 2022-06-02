import React from "react";
import { ComponentStateCounter, GlobalStateCounter } from "component/counter";

const style = {
  border: "solid 1px #CCC",
  display: "inline-block",
  padding: 10,
  margin: 10,
};

const leftMargin = {
  marginLeft: 10,
};

function App() {
  const [visibleGroup1, setVisiableGroup1] = React.useState(true);
  const [visibleGroup2, setVisiableGroup2] = React.useState(true);
  return (
    <div>
      <div style={style}>
        <div style={leftMargin}>
          <input
            type="checkbox"
            checked={visibleGroup1}
            onChange={() => setVisiableGroup1(!visibleGroup1)}
          />
          Component State{" "}
        </div>
        {visibleGroup1 && (
          <>
            <ComponentStateCounter />
            <ComponentStateCounter />
            <ComponentStateCounter />
          </>
        )}
      </div>
      <div style={style}>
        <div style={leftMargin}>
          <input
            type="checkbox"
            checked={visibleGroup2}
            onChange={() => setVisiableGroup2(!visibleGroup2)}
          />
          Global State
        </div>
        {visibleGroup2 && (
          <>
            <GlobalStateCounter />
            <GlobalStateCounter />
            <GlobalStateCounter />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
