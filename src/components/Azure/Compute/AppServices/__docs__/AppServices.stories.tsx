import type { Meta, StoryObj } from "@storybook/react";
import AppServices from "../AppServices";

const meta: Meta<typeof AppServices> = { title: "Azure/Compute/AppServices", component: AppServices };

export default meta;
type Story = StoryObj<typeof AppServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
