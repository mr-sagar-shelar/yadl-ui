import type { Meta, StoryObj } from "@storybook/react";
import AppSync from "../AppSync";

const meta: Meta<typeof AppSync> = { title: "AWS/AppIntegration/AppSync", component: AppSync };

export default meta;
type Story = StoryObj<typeof AppSync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
