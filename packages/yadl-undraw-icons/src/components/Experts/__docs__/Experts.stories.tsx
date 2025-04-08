import type { Meta, StoryObj } from "@storybook/react";
import Experts from "../Experts";

const meta: Meta<typeof Experts> = { title: "unDraw/Experts", component: Experts };

export default meta;
type Story = StoryObj<typeof Experts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
