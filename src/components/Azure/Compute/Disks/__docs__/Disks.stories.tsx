import type { Meta, StoryObj } from "@storybook/react";
import Disks from "../Disks";

const meta: Meta<typeof Disks> = { title: "Azure/Compute/Disks", component: Disks };

export default meta;
type Story = StoryObj<typeof Disks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
