import type { Meta, StoryObj } from "@storybook/react";
import Social_distancingSocialDistancing from "../Social_distancingSocialDistancing";

const meta: Meta<typeof Social_distancingSocialDistancing> = { title: "unDraw/Social_distancingSocialDistancing", component: Social_distancingSocialDistancing };

export default meta;
type Story = StoryObj<typeof Social_distancingSocialDistancing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
