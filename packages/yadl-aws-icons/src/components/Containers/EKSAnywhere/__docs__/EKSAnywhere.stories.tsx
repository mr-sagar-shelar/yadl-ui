import type { Meta, StoryObj } from "@storybook/react";
import EKSAnywhere from "../EKSAnywhere";

const meta: Meta<typeof EKSAnywhere> = { title: "AWS/Containers/EKSAnywhere", component: EKSAnywhere };

export default meta;
type Story = StoryObj<typeof EKSAnywhere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
