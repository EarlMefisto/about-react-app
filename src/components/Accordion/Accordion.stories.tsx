import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";
import { title } from "process";

const meta: Meta<typeof Accordion> = {
  title: "Story Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
  args: {
    titleValue: "First",
    unwrap: true,
    onChange: () => {},
  },
};

const onChangeHandler = action("OnChange");
const onClickCallback = action('some item was clicked')

export const UnwrapAccordion = () => {
  return (
    <Accordion
      titleValue="Menu"
      unwrap={true}
      onChange={onChangeHandler}
      items={[]}
      onClick={onClickCallback}
    />
  );
};
export const OpenedAccordion = () => {
  const item = [
    { title: "Ira", value: 1 },
    { title: "Vika", value: 2 },
    { title: "Olya", value: 3 },
    { title: "Nastya", value: 4 },
  ];

  return (
    <Accordion
      titleValue="Users"
      unwrap={false}
      onChange={() => {}}
      items={item}
      onClick={onClickCallback}
    />
  );
};

export const IsAccordion = () => {
  const [unwrap, setUnwrap] = useState(false);

  const item = [
    { title: "Ira", value: 1 },
    { title: "Vika", value: 2 },
    { title: "Olya", value: 3 },
    { title: "Nastya", value: 4 },
  ];
  return (
    <Accordion
      titleValue="Menu"
      unwrap={unwrap}
      onChange={() => {
        setUnwrap(!unwrap);
      }}
      items={item}
      onClick={onClickCallback}
    />
  );
};
