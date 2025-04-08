import type { Meta, StoryObj } from "@storybook/react";
import Coolness from "../Coolness";

const meta: Meta<typeof Coolness> = { title: "unDraw/Coolness", component: Coolness };

export default meta;
type Story = StoryObj<typeof Coolness>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
