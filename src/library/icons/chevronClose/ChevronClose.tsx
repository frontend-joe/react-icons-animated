import { FC } from "react";
import "./styles.css";

export const ChevronClose: FC<IconProps> = ({ isClosed }) => (
  <span className={`chevron-close ${isClosed ? "is-closed" : ""}`} />
);
