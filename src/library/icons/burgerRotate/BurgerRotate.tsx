import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerRotate: FC<IconProps> = ({ isClosed }) => (
  <span className={`burger burger-rotate ${isClosed && "is-closed"}`} />
);
