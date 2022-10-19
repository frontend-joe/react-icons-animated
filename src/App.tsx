import {
  BurgerRotate,
  BurgerArrow,
  BurgerClose,
  BurgerSwipe,
  BurgerVeggie,
  BurgerDank,
  BurgerBoughie,
  BurgerSpin,
  ChevronClose,
} from "./library";
import "./App.css";
import { useEffect, useState } from "react";

import { Docs } from "./components/Docs";
import { CodeButton } from "./components/CodeButton";

const burgers: IconComponent[] = [
  { name: "Rotate", Icon: BurgerRotate },
  { name: "Arrow", Icon: BurgerArrow },
  { name: "Close", Icon: BurgerClose },
  { name: "Swipe", Icon: BurgerSwipe },
  { name: "Veggie", Icon: BurgerVeggie },
  { name: "Dank", Icon: BurgerDank },
  { name: "Boughie", Icon: BurgerBoughie },
  { name: "Spin", Icon: BurgerSpin },
  { name: "ChevronClose", Icon: ChevronClose },
];

function App() {
  const [isClosedList, setIsClosedList] = useState<boolean[]>([]);
  const [activeBurger, setActiveBurger] = useState<IconComponent | undefined>();

  const handleBurgerClicked = (index: number) => {
    const isClosedListCopy = [...isClosedList];
    isClosedListCopy[index] = !isClosedListCopy[index];
    setIsClosedList(isClosedListCopy);
  };

  const handleCodeButtonClicked = (name: string) => {
    const foundBurger = burgers.find((b) => b.name === name);
    setActiveBurger(foundBurger);
  };

  useEffect(() => {
    setIsClosedList(burgers.map(() => false));
  }, []);

  return (
    <main className={`wrapper ${activeBurger && "is-docs-open"}`}>
      <div className="burgers">
        {burgers.map(({ name, Icon }, index) => (
          <div className="cell" key={name}>
            <CodeButton onClick={handleCodeButtonClicked}>{name}</CodeButton>
            <h2 className="cell-title">{name}</h2>
            <button onClick={() => handleBurgerClicked(index)}>
              <Icon isClosed={isClosedList[index]} />
            </button>
          </div>
        ))}
      </div>
      <Docs activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
    </main>
  );
}

export default App;
