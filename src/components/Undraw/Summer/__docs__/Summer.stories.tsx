import type { Meta, StoryObj } from "@storybook/react";
import Summer from "../Summer";

const meta: Meta<typeof Summer> = { title: "unDraw/Summer", component: Summer };

export default meta;
type Story = StoryObj<typeof Summer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
