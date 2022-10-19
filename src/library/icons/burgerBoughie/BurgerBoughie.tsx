import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerBoughie: FC<IconProps> = ({ isClosed }) => (
  <span className={`burger burger-boughie ${isClosed && "is-closed"}`} />
);
