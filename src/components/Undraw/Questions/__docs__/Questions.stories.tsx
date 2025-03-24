import type { Meta, StoryObj } from "@storybook/react";
import Questions from "../Questions";

const meta: Meta<typeof Questions> = { title: "unDraw/Questions", component: Questions };

export default meta;
type Story = StoryObj<typeof Questions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
