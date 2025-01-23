import type { Meta } from "@storybook/react/*";
import { UncontrolledInput } from "./UncontrolledInput";
import { ChangeEvent, useRef, useState } from "react";

const meta: Meta<typeof UncontrolledInput> = {
  title: "Story UncontrolledInput",
  component: UncontrolledInput,
};

export default meta;

export const StoryUncontrolledInput = () => <UncontrolledInput />;

export const TrackValueUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  };

  return (
    <>
      <input onChange={onChange} /> actual value: {value}
    </>
  );
};

export const GetValueUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    const element = inputRef.current as HTMLInputElement;
    setValue(element.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={onClick}>save</button> actual value: {value}
    </>
  );
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");

  return (
    <input
      value={parentValue}
      onChange={(e) => {
        setParentValue(e.currentTarget.value);
      }}
    />
  );
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  setParentValue(e.currentTarget.checked)
}
  return (
    <input
      type="checkbox"
      checked={parentValue}
      onChange={onChange}
    />
  );
};

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>("2");

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return (
    <select value={parentValue} onChange={onChange}>
      <option value="">none</option>
      <option value="1">Minsk</option>
      <option value="2">Moscow</option>
      <option value="3">Kiev</option>
    </select>
  );
};