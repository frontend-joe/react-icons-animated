import {
  BurgerRotate,
  BurgerArrow,
  BurgerClose,
  BurgerSwipe,
  BurgerVeggie,
  BurgerDank,
  BurgerBoughie,
  BurgerSpin,
  BurgerFade,
} from "./library";
import "./App.css";
import { useEffect, useState } from "react";

import { Docs } from "./components/Docs";
import { CodeButton } from "./components/CodeButton";

const burgers: BurgerComponent[] = [
  { name: "Rotate", Burger: BurgerRotate },
  { name: "Arrow", Burger: BurgerArrow },
  { name: "Close", Burger: BurgerClose },
  { name: "Swipe", Burger: BurgerSwipe },
  { name: "Veggie", Burger: BurgerVeggie },
  { name: "Dank", Burger: BurgerDank },
  { name: "Boughie", Burger: BurgerBoughie },
  { name: "Spin", Burger: BurgerSpin },
  { name: "Fade", Burger: BurgerFade },
];

function App() {
  const [isClosedList, setIsClosedList] = useState<boolean[]>([]);
  const [activeBurger, setActiveBurger] = useState<
    BurgerComponent | undefined
  >();

  const handleBurgerClicked = (index: number) => {
    const isClosedListCopy = [...isClosedList];
    isClosedListCopy[index] = !isClosedListCopy[index];
    setIsClosedList(isClosedListCopy);
  };

  const handleCodeButtonClicked = (name: string) => {
    console.log("name", name);

    const foundBurger = burgers.find((b) => b.name === name);

    setActiveBurger(foundBurger);
  };

  useEffect(() => {
    setIsClosedList(burgers.map(() => false));
  }, []);

  return (
    <main className={`wrapper ${activeBurger && "is-docs-open"}`}>
      <div className="burgers">
        {burgers.map(({ name, Burger }, index) => (
          <div className="cell" key={name}>
            <CodeButton onClick={handleCodeButtonClicked}>{name}</CodeButton>
            <h2 className="cell-title">{name}</h2>
            <button onClick={() => handleBurgerClicked(index)}>
              <Burger isClosed={isClosedList[index]} />
            </button>
          </div>
        ))}
      </div>
      <Docs activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
    </main>
  );
}

export default App;
