import type { Meta, StoryObj } from "@storybook/react";
import Security from "../Security";

const meta: Meta<typeof Security> = { title: "unDraw/Security", component: Security };

export default meta;
type Story = StoryObj<typeof Security>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
