import { FC } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  setActiveBurger: (args0: IconComponent | undefined) => void;
  activeBurger: IconComponent | undefined;
};

const example = (name: string) => `
import { Burger${name} } 
  from "react-burger-icons";

import { useState } from "react";

export const App = () => {
  const [isClosed, setIsClosed] = 
    useState<boolean>(false);

  return (
    <button
      onClick={() => setIsClosed(!isClosed)}
      style={{
        width: "50px",
        height: "50px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Burger${name} isClosed={isClosed} />
    </button>
  );
}
`;

export const Docs: FC<Props> = ({ activeBurger, setActiveBurger }) => (
  <aside className="docs">
    <button
      onClick={() => setActiveBurger(undefined)}
      className="docs-close-button"
    >
      Close
    </button>
    <h2>Burger{activeBurger?.name}</h2>

    <p>1. Install the npm package</p>

    <SyntaxHighlighter
      customStyle={{
        borderRadius: 0,
        margin: "10px 24px 30px",
        padding: "20px 24px",
        background: "#1d1e22",
        fontSize: "14px",
      }}
      language="tsx"
      style={style}
    >
      npm i react-burger-icons
    </SyntaxHighlighter>

    <p>2. Create button and hookup icon</p>

    <SyntaxHighlighter
      customStyle={{
        borderRadius: 0,
        margin: "10px 24px 30px",
        padding: "0 24px 24px",
        background: "#1d1e22",
        fontSize: "14px",
      }}
      language="tsx"
      style={style}
    >
      {example(activeBurger?.name!)}
    </SyntaxHighlighter>
  </aside>
);
