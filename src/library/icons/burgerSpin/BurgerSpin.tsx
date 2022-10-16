import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerSpin: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-spin ${isClosed && "is-closed"}`} />
);
