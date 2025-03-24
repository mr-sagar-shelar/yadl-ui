import type { Meta, StoryObj } from "@storybook/react";
import ConfigurationManagement from "../ConfigurationManagement";

const meta: Meta<typeof ConfigurationManagement> = { title: "GCP/ConfigurationManagement", component: ConfigurationManagement };

export default meta;
type Story = StoryObj<typeof ConfigurationManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
