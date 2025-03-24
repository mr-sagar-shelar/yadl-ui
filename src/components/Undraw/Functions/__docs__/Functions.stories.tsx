import type { Meta, StoryObj } from "@storybook/react";
import Functions from "../Functions";

const meta: Meta<typeof Functions> = { title: "unDraw/Functions", component: Functions };

export default meta;
type Story = StoryObj<typeof Functions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
