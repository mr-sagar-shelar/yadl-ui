import type { Meta, StoryObj } from "@storybook/react";
import Cloud9 from "../Cloud9";

const meta: Meta<typeof Cloud9> = { title: "AWS/DeveloperTools/Cloud9", component: Cloud9 };

export default meta;
type Story = StoryObj<typeof Cloud9>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
