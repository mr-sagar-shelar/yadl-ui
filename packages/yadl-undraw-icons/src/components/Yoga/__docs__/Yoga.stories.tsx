import type { Meta, StoryObj } from "@storybook/react";
import Yoga from "../Yoga";

const meta: Meta<typeof Yoga> = { title: "unDraw/Yoga", component: Yoga };

export default meta;
type Story = StoryObj<typeof Yoga>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
