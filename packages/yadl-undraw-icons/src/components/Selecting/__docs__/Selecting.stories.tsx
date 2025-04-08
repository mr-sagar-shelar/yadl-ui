import type { Meta, StoryObj } from "@storybook/react";
import Selecting from "../Selecting";

const meta: Meta<typeof Selecting> = { title: "unDraw/Selecting", component: Selecting };

export default meta;
type Story = StoryObj<typeof Selecting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
