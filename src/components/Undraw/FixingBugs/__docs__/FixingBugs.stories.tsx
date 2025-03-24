import type { Meta, StoryObj } from "@storybook/react";
import FixingBugs from "../FixingBugs";

const meta: Meta<typeof FixingBugs> = { title: "unDraw/FixingBugs", component: FixingBugs };

export default meta;
type Story = StoryObj<typeof FixingBugs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
