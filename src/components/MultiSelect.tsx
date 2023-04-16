import React, { useState, useRef, useCallback } from "react";
import { ItemAction, SelectItem } from "../types";
import { clsx } from "clsx";
import { useOutsideClick } from "../utils/utils";
import { ReactComponent as SelectIcon } from "../icons/select.svg";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { Option } from "./Option";
import { TextInput } from "./TextInput";

interface Props {
  data: SelectItem[];
  label: string;
  placeholder: string;
}

export const MultiSelect = ({ data, label, placeholder }: Props) => {
  const [remainingItems, setRemainingItems] = useState(data);
  const [selectedItems, setSelectedItems] = useState<SelectItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const areItemsSelected = selectedItems.length > 0;
  const areItemsRemaining = remainingItems.length > 0;

  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = useCallback(
    (e: React.MouseEvent, selectedValue: string, action: ItemAction) => {
      e.stopPropagation();
      const itemInOriginalData = data.find(
        (item) => item.value === selectedValue
      );
      const arrayToRemoveItem =
        action === ItemAction.Add ? remainingItems : selectedItems;

      const chosenItemIndex = arrayToRemoveItem.findIndex(
        (item) => item.value === selectedValue
      );

      if (chosenItemIndex === -1) return;

      const updatedItems = [...arrayToRemoveItem];
      const chosenItemToRemove = arrayToRemoveItem[chosenItemIndex];
      updatedItems.splice(chosenItemIndex, 1);

      itemInOriginalData &&
        setRemainingItems((prevItems) =>
          action === ItemAction.Add
            ? updatedItems
            : [...prevItems, chosenItemToRemove]
        );
      setSelectedItems((prevItems) =>
        action === ItemAction.Add
          ? [...prevItems, chosenItemToRemove]
          : updatedItems
      );
    },
    [remainingItems, selectedItems, data]
  );

  useOutsideClick(selectRef, () => setIsOpen(false));

  return (
    <div ref={selectRef}>
      <p className="font-bold mb-6">{label}</p>
      <div
        className={clsx(
          "flex items-center justify-between min-h-52 px-12 py-8 mb-10 rounded border-2 transition-colors",
          isOpen ? "border-blue" : "border-gray"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ul className="flex flex-wrap gap-8 mr-6 w-full">
          {areItemsSelected &&
            selectedItems.map((selectedItem) => {
              const { value, label } = selectedItem;
              return (
                <li
                  key={value}
                  className="flex items-center gap-10 px-6 py-4 bg-lightGray rounded-md text-16 text-darkGray cursor-auto"
                >
                  {label}
                  <CloseIcon
                    className="h-10 cursor-pointer stroke-darkGray"
                    onClick={(e: React.MouseEvent) => {
                      !isOpen && setIsOpen(true);
                      handleItemClick(e, value, ItemAction.Remove);
                    }}
                  />
                </li>
              );
            })}
          <TextInput
            data={data}
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeholder={placeholder}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </ul>

        <SelectIcon className="h-14 stroke-gray" />
      </div>
      {areItemsRemaining && (
        <ul
          className={clsx(
            "flex flex-col items-center origin-top p-4 mb-6 rounded border-2 border-lightGray shadow",
            isOpen ? "scale-y-100" : "scale-y-0"
          )}
        >
          {remainingItems.map((remainingItem) => {
            return (
              <Option
                item={remainingItem}
                handleItemClick={handleItemClick}
                action={ItemAction.Add}
                className="cursor-pointer px-20 py-12 rounded hover:bg-lightGray w-full"
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
