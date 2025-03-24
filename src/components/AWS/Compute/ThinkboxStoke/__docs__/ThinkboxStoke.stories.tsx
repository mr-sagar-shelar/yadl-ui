import type { Meta, StoryObj } from "@storybook/react";
import ThinkboxStoke from "../ThinkboxStoke";

const meta: Meta<typeof ThinkboxStoke> = { title: "AWS/Compute/ThinkboxStoke", component: ThinkboxStoke };

export default meta;
type Story = StoryObj<typeof ThinkboxStoke>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
