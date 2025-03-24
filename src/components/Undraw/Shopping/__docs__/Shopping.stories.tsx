import type { Meta, StoryObj } from "@storybook/react";
import Shopping from "../Shopping";

const meta: Meta<typeof Shopping> = { title: "unDraw/Shopping", component: Shopping };

export default meta;
type Story = StoryObj<typeof Shopping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
