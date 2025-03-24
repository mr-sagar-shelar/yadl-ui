import type { Meta, StoryObj } from "@storybook/react";
import Surfer from "../Surfer";

const meta: Meta<typeof Surfer> = { title: "unDraw/Surfer", component: Surfer };

export default meta;
type Story = StoryObj<typeof Surfer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
