import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: (name: string) => void;
};

export const CodeButton: FC<Props> = ({ children, onClick }) => (
  <button
    onClick={() => onClick(children?.toString()!)}
    className="code-button"
    type="button"
  >
    <span className="code-button-text">Code</span>
    <span className="code-icon">
      <span></span>
      <span></span>
    </span>
  </button>
);
