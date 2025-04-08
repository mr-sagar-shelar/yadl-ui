import type { Meta, StoryObj } from "@storybook/react";
import ThinkboxKrakatoa from "../ThinkboxKrakatoa";

const meta: Meta<typeof ThinkboxKrakatoa> = { title: "AWS/Compute/ThinkboxKrakatoa", component: ThinkboxKrakatoa };

export default meta;
type Story = StoryObj<typeof ThinkboxKrakatoa>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
