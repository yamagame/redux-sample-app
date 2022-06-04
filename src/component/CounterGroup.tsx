import React from "react";

const style = {
  border: "solid 1px #CCC",
  padding: 10,
  margin: 10,
};

const leftMargin = {
  marginLeft: 10,
};

export type CounterGroupProps = React.PropsWithChildren<{
  title: string;
}>;

export const CounterGroup: React.FC<CounterGroupProps> = (props) => {
  const [visible, setVisible] = React.useState(true);
  const { title, children } = props;
  React.useEffect(() => {
    console.log(`effect: ${CounterGroup.name}`);
  });
  React.useEffect(() => {
    console.log(`effect: ${CounterGroup.name}`, visible);
  }, [visible]);
  console.log(`render: ${CounterGroup.name}`, title, visible);
  return (
    <div style={style}>
      <div style={leftMargin}>
        <input
          type="checkbox"
          checked={visible}
          onChange={() => setVisible(!visible)}
        />
        {title}
      </div>
      {visible && <>{children}</>}
    </div>
  );
};
