import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerArrow: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-arrow ${isClosed && "is-closed"}`} />
);
