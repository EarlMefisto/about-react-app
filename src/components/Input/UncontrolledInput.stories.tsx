import type { Meta } from "@storybook/react/*";
import { UncontrolledInput } from "./UncontrolledInput";
import { Input } from "./Input";
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
      <input
        onChange={onChange}
      />{" "}
      actual value: {value}
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

export const StoryControlledInput = () => <Input value="Uno" />;
