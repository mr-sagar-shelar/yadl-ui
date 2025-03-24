import type { Meta, StoryObj } from "@storybook/react";
import Abstract from "../Abstract";

const meta: Meta<typeof Abstract> = { title: "unDraw/Abstract", component: Abstract };

export default meta;
type Story = StoryObj<typeof Abstract>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
