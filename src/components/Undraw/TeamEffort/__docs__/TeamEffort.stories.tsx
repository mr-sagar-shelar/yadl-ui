import type { Meta, StoryObj } from "@storybook/react";
import TeamEffort from "../TeamEffort";

const meta: Meta<typeof TeamEffort> = { title: "unDraw/TeamEffort", component: TeamEffort };

export default meta;
type Story = StoryObj<typeof TeamEffort>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
