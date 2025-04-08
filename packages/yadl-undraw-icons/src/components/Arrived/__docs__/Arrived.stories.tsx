import type { Meta, StoryObj } from "@storybook/react";
import Arrived from "../Arrived";

const meta: Meta<typeof Arrived> = { title: "unDraw/Arrived", component: Arrived };

export default meta;
type Story = StoryObj<typeof Arrived>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
