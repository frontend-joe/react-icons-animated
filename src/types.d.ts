type IconComponent = {
  name: string;
  Icon: FC<IconProps>;
};

type IconProps = {
  isClosed?: boolean;
  className?: string;
};
