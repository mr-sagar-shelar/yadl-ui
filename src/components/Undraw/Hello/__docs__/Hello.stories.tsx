import type { Meta, StoryObj } from "@storybook/react";
import Hello from "../Hello";

const meta: Meta<typeof Hello> = { title: "unDraw/Hello", component: Hello };

export default meta;
type Story = StoryObj<typeof Hello>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
