import type { Meta, StoryObj } from "@storybook/react";
import EKSCloud from "../EKSCloud";

const meta: Meta<typeof EKSCloud> = { title: "AWS/Containers/EKSCloud", component: EKSCloud };

export default meta;
type Story = StoryObj<typeof EKSCloud>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
