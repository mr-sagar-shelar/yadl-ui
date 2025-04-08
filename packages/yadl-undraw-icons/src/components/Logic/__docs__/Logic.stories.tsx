import type { Meta, StoryObj } from "@storybook/react";
import Logic from "../Logic";

const meta: Meta<typeof Logic> = { title: "unDraw/Logic", component: Logic };

export default meta;
type Story = StoryObj<typeof Logic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
