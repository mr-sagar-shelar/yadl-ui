import type { Meta, StoryObj } from "@storybook/react";
import AppConfig from "../AppConfig";

const meta: Meta<typeof AppConfig> = { title: "AWS/ManagementGovernance/AppConfig", component: AppConfig };

export default meta;
type Story = StoryObj<typeof AppConfig>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
