import type { Meta } from "@storybook/react/*";
import { OnOff } from "./OnOff";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof OnOff> = {
  title: "Story OnOff",
  component: OnOff,
};

export default meta;

const actionCollback = action("on or off clicked");

export const OnMode = () => <OnOff on={true} onChange={actionCollback} />;
export const OffMode = () => <OnOff on={false} onChange={actionCollback} />;

export const ChangeMode = () => {
  const [mode, setMode] = useState<boolean>(true);
  return <OnOff on={mode} onChange={setMode} />;
};
