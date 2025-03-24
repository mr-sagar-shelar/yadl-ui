import type { Meta, StoryObj } from "@storybook/react";
import BeachDay from "../BeachDay";

const meta: Meta<typeof BeachDay> = { title: "unDraw/BeachDay", component: BeachDay };

export default meta;
type Story = StoryObj<typeof BeachDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
