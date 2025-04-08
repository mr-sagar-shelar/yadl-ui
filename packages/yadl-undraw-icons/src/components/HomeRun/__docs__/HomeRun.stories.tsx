import type { Meta, StoryObj } from "@storybook/react";
import HomeRun from "../HomeRun";

const meta: Meta<typeof HomeRun> = { title: "unDraw/HomeRun", component: HomeRun };

export default meta;
type Story = StoryObj<typeof HomeRun>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
