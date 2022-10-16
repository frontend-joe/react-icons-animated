import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerVeggie: FC<BurgerProps> = ({ isClosed }) => (
  <span className={`burger burger-veggie ${isClosed && "is-closed"}`} />
);
