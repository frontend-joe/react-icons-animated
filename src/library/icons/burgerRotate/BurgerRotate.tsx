import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerRotate: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-rotate ${isClosed && "is-closed"}`} />
);
