import type { Meta } from "@storybook/react/*";
import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof UncontrolledOnOff> = {
  title: "Story UncontrolledOnOff",
  component: UncontrolledOnOff,
};

export default meta;

const actionCollback = action("on or off clicked");

export const UncontrolledOnOffMode = () => (
  <UncontrolledOnOff defaultMode={true} onChange={actionCollback} />
);
