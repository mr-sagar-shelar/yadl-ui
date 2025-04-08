import type { Meta, StoryObj } from "@storybook/react";
import Wilderness from "../Wilderness";

const meta: Meta<typeof Wilderness> = { title: "unDraw/Wilderness", component: Wilderness };

export default meta;
type Story = StoryObj<typeof Wilderness>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
