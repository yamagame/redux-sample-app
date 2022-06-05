import React from "react";

const style = {
  border: "solid 1px #CCC",
  padding: 10,
  margin: 10,
};

const leftMargin = {
  marginLeft: 10,
};

export type GroupProps = React.PropsWithChildren<{
  title: string;
}>;

export const Group: React.FC<GroupProps> = (props) => {
  const [visible, setVisible] = React.useState(true);
  const { title, children } = props;
  React.useEffect(() => {
    console.log(`effect: ${Group.name}`);
  });
  React.useEffect(() => {
    console.log(`effect: ${Group.name}`, visible);
  }, [visible]);
  React.useLayoutEffect(() => {
    console.log(`layout: ${Group.name}`);
  });
  console.log(`render: ${Group.name}`, title, visible);
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
