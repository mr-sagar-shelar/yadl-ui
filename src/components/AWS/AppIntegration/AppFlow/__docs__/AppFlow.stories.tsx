import type { Meta, StoryObj } from "@storybook/react";
import AppFlow from "../AppFlow";

const meta: Meta<typeof AppFlow> = { title: "AWS/AppIntegration/AppFlow", component: AppFlow };

export default meta;
type Story = StoryObj<typeof AppFlow>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
