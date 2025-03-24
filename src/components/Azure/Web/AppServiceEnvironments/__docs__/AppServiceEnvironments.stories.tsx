import type { Meta, StoryObj } from "@storybook/react";
import AppServiceEnvironments from "../AppServiceEnvironments";

const meta: Meta<typeof AppServiceEnvironments> = { title: "Azure/Web/AppServiceEnvironments", component: AppServiceEnvironments };

export default meta;
type Story = StoryObj<typeof AppServiceEnvironments>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
