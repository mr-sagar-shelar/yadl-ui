import type { Meta, StoryObj } from "@storybook/react";
import Hamburger from "../Hamburger";

const meta: Meta<typeof Hamburger> = { title: "unDraw/Hamburger", component: Hamburger };

export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
