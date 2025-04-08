import type { Meta, StoryObj } from "@storybook/react";
import ThinkboxFrost from "../ThinkboxFrost";

const meta: Meta<typeof ThinkboxFrost> = { title: "AWS/Compute/ThinkboxFrost", component: ThinkboxFrost };

export default meta;
type Story = StoryObj<typeof ThinkboxFrost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
