import type { Meta, StoryObj } from "@storybook/react";
import Smartphone from "../Smartphone";

const meta: Meta<typeof Smartphone> = { title: "unDraw/Smartphone", component: Smartphone };

export default meta;
type Story = StoryObj<typeof Smartphone>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
