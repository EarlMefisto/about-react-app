import type { Meta } from "@storybook/react";
import { UncontrolledRating } from "./UncontrolledRating";
import {action} from "@storybook/addon-actions"

const meta: Meta<typeof UncontrolledRating> = {
  title: "Story UncontrolledRating",
  component: UncontrolledRating,
};

export default meta;

const actionCollback = action("rating changed");

export const RatingMode = () => <UncontrolledRating defaultRating={3} onChange={actionCollback} />;

