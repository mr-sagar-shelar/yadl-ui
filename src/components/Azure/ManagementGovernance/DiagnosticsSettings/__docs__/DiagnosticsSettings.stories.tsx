import type { Meta, StoryObj } from "@storybook/react";
import DiagnosticsSettings from "../DiagnosticsSettings";

const meta: Meta<typeof DiagnosticsSettings> = { title: "Azure/ManagementGovernance/DiagnosticsSettings", component: DiagnosticsSettings };

export default meta;
type Story = StoryObj<typeof DiagnosticsSettings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
