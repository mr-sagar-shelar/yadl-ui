import type { Meta, StoryObj } from "@storybook/react";
import Together from "../Together";

const meta: Meta<typeof Together> = { title: "unDraw/Together", component: Together };

export default meta;
type Story = StoryObj<typeof Together>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
