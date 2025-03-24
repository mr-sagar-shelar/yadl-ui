import type { Meta, StoryObj } from "@storybook/react";
import Bottlerocket from "../Bottlerocket";

const meta: Meta<typeof Bottlerocket> = { title: "AWS/Compute/Bottlerocket", component: Bottlerocket };

export default meta;
type Story = StoryObj<typeof Bottlerocket>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
