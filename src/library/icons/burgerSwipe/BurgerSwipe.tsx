import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerSwipe: FC<IconProps> = ({ isClosed }) => (
  <span className={`burger burger-swipe ${isClosed && "is-closed"}`} />
);
