import type { Meta } from "@storybook/react/*";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

const meta: Meta<typeof UncontrolledAccordion> = {
  title: "Story UncontrolledAccordion",
  component: UncontrolledAccordion,
};

export default meta;

export const UnwrapAccordion = () => {
  return <UncontrolledAccordion titleValue="Menu" />;
};
export const OpenedAccordion = () => {
  return <UncontrolledAccordion titleValue="Menu" />;
};
