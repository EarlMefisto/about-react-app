import type { Meta } from "@storybook/react";
import { UncontrolledRating } from "./UncontrolledRating";

const meta: Meta<typeof UncontrolledRating> = {
  title: "Story Rating",
  component: UncontrolledRating,
};

export default meta;

export const RatingMode = () => <UncontrolledRating />;
