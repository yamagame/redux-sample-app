import React from "react";

type BackgroundColorContext = {
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
};

const defaultContext: BackgroundColorContext = {
  backgroundColor: "#FFF",
  setBackgroundColor: (backgroundColor) => {},
};

export const backgroundColorContext =
  React.createContext<BackgroundColorContext>(defaultContext);

function useBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = React.useState(
    defaultContext.backgroundColor
  );
  return {
    backgroundColor,
    setBackgroundColor,
  };
}

type BackgroundColorProviderProps = React.PropsWithChildren<{}>;

export function BackgroundColorProvider(props: BackgroundColorProviderProps) {
  const ctx = useBackgroundColor();
  return (
    <backgroundColorContext.Provider value={ctx}>
      {props.children}
    </backgroundColorContext.Provider>
  );
}
