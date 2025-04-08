import type { Meta, StoryObj } from "@storybook/react";
import Development from "../Development";

const meta: Meta<typeof Development> = { title: "unDraw/Development", component: Development };

export default meta;
type Story = StoryObj<typeof Development>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
