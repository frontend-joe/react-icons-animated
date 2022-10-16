type BurgerComponent = {
  name: string;
  Burger: FC<BurgerProps>;
};

type BurgerProps = {
  isClosed?: boolean;
  className?: string;
};
