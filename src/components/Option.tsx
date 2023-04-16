import { ItemAction, SelectItem } from "../types";

interface Props {
  item: SelectItem;
  handleItemClick: (
    e: React.MouseEvent,
    selectedValue: string,
    action: ItemAction
  ) => void;
  action: ItemAction;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const Option = ({
  item,
  handleItemClick,
  action,
  className,
  children,
}: Props) => {
  const { value, label } = item;
  return (
    <li
      key={value}
      onClick={(e) => handleItemClick(e, value, action)}
      className={className}
    >
      {label}
      {children}
    </li>
  );
};
