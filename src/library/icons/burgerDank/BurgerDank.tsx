import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerDank: FC<IconProps> = ({ isClosed }) => (
  <span className={`burger burger-dank ${isClosed && "is-closed"}`} />
);
