import { useEffect, useState } from "react";
import styles from "./Select.module.css";
import { KeyboardEvent } from "react";

type SelectPropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: ItemType[];
};

type ItemType = {
  title: string;
  value: any;
};

export function Select(props: SelectPropsType) {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find((i) => i.value === props.value);
  const hoveredItem = props.items.find((i) => i.value === hoveredElementValue);

  const showItems = () => setActive(!active);

  const onItemClick = (value: any) => {
    props.onChange(value);
    showItems();
  };

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i] === hoveredElementValue) {
          const pretendentElement =
            event.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (selectedItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (event.key === "Enter" || event.key === "Escape") {
      setActive(false);
    }
  };

  return (
    <div>
      <div className={styles.select} onKeyDownCapture={onKeyDown} tabIndex={0}>
        <span className={styles.main} onClick={showItems}>
          {selectedItem && selectedItem.title}
        </span>
        {active && (
          <div className={styles.items}>
            {props.items.map((i) => (
              <div
                onMouseEnter={() => {
                  setHoveredElementValue(i.value);
                }}
                className={
                  styles.item + " " + (hoveredItem === i ? styles.selected : "")
                }
                key={i.value}
                onClick={() => {
                  onItemClick(i.value);
                }}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
