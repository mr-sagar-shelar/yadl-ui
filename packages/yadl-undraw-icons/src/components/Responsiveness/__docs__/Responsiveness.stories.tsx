import type { Meta, StoryObj } from "@storybook/react";
import Responsiveness from "../Responsiveness";

const meta: Meta<typeof Responsiveness> = { title: "unDraw/Responsiveness", component: Responsiveness };

export default meta;
type Story = StoryObj<typeof Responsiveness>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
