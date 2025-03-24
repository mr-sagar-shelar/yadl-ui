import type { Meta, StoryObj } from "@storybook/react";
import Children from "../Children";

const meta: Meta<typeof Children> = { title: "unDraw/Children", component: Children };

export default meta;
type Story = StoryObj<typeof Children>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
