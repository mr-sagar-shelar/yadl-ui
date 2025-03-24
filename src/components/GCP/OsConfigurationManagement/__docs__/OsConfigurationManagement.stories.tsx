import type { Meta, StoryObj } from "@storybook/react";
import OsConfigurationManagement from "../OsConfigurationManagement";

const meta: Meta<typeof OsConfigurationManagement> = { title: "GCP/OsConfigurationManagement", component: OsConfigurationManagement };

export default meta;
type Story = StoryObj<typeof OsConfigurationManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
