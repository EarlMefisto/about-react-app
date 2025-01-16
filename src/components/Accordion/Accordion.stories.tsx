import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

const meta: Meta<typeof Accordion> = {
  title: "Story Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
 args: {
titleValue: "First",
unwrap: true,
onChange: () => {}
 } 
}

const onChangeHandler = action("OnChange")

export const UnwrapAccordion = () => {
  return <Accordion titleValue="Menu" unwrap={true} onChange={onChangeHandler} />;
};
export const OpenedAccordion = () => {
  return <Accordion titleValue="Users" unwrap={false} onChange={() => {}} />;
};

export const IsAccordion = () => {
  const [unwrap, setUnwrap] = useState(false);
  return (
    <Accordion
      titleValue="Menu"
      unwrap={unwrap}
      onChange={() => {
        setUnwrap(!unwrap);
      }}
    />
  );
};
