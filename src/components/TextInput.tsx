import { SelectItem } from "../types";

interface Props {
  data: SelectItem[];
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  placeholder: string;
  selectedItems: SelectItem[];
  setSelectedItems: (selectedItems: SelectItem[]) => void;
}

export const TextInput = ({
  data,
  placeholder,
  inputValue,
  setInputValue,
  selectedItems,
  setSelectedItems,
}: Props) => {
  const addOwnItem = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string
  ) => {
    if (e.code !== "Enter" || inputValue.trim() === "") return;

    const trimmedValue = inputValue.trim().toLowerCase();

    if (trimmedValue.length > 10) {
      alert("You are only allowed to add maximum 10 characters!");
      return;
    }

    const duplicateItem = data.find(
      (item) => item.label.toLowerCase() === trimmedValue
    );
    if (duplicateItem) {
      alert(`You already have ${trimmedValue} in the option list!`);
      return;
    }

    setSelectedItems([
      ...selectedItems,
      { value: trimmedValue, label: inputValue.trim() },
    ]);

    setInputValue("");
  };
  return (
    <input
      type="text"
      className="border-none outline-none bg-transparent grow"
      placeholder={selectedItems.length === 0 ? placeholder : ""}
      onKeyDown={(e) => addOwnItem(e, inputValue)}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};
