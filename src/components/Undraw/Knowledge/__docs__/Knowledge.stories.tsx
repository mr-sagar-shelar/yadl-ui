import type { Meta, StoryObj } from "@storybook/react";
import Knowledge from "../Knowledge";

const meta: Meta<typeof Knowledge> = { title: "unDraw/Knowledge", component: Knowledge };

export default meta;
type Story = StoryObj<typeof Knowledge>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
