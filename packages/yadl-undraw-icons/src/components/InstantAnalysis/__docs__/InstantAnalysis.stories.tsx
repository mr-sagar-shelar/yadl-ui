import type { Meta, StoryObj } from "@storybook/react";
import InstantAnalysis from "../InstantAnalysis";

const meta: Meta<typeof InstantAnalysis> = { title: "unDraw/InstantAnalysis", component: InstantAnalysis };

export default meta;
type Story = StoryObj<typeof InstantAnalysis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
