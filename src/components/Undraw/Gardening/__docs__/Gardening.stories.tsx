import type { Meta, StoryObj } from "@storybook/react";
import Gardening from "../Gardening";

const meta: Meta<typeof Gardening> = { title: "unDraw/Gardening", component: Gardening };

export default meta;
type Story = StoryObj<typeof Gardening>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
