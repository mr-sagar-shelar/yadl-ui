import type { Meta, StoryObj } from "@storybook/react";
import Walking from "../Walking";

const meta: Meta<typeof Walking> = { title: "unDraw/Walking", component: Walking };

export default meta;
type Story = StoryObj<typeof Walking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
