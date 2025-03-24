import type { Meta, StoryObj } from "@storybook/react";
import Goals from "../Goals";

const meta: Meta<typeof Goals> = { title: "unDraw/Goals", component: Goals };

export default meta;
type Story = StoryObj<typeof Goals>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
