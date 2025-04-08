import type { Meta, StoryObj } from "@storybook/react";
import Studying from "../Studying";

const meta: Meta<typeof Studying> = { title: "unDraw/Studying", component: Studying };

export default meta;
type Story = StoryObj<typeof Studying>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
