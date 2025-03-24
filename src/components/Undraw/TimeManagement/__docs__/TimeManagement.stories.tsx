import type { Meta, StoryObj } from "@storybook/react";
import TimeManagement from "../TimeManagement";

const meta: Meta<typeof TimeManagement> = { title: "unDraw/TimeManagement", component: TimeManagement };

export default meta;
type Story = StoryObj<typeof TimeManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
