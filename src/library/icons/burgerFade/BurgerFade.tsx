import { FC } from "react";
import "../burger.css";
import "./styles.css";

export const BurgerFade: FC<IconProps> = ({ isClosed }) => (
  <div className="burger-fade-wrap">
    <span className={`burger burger-fade-top ${isClosed && "is-closed"}`} />
    <span className={`burger burger-fade ${isClosed && "is-closed"}`} />
  </div>
);
