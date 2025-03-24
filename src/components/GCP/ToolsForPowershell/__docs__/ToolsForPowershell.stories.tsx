import type { Meta, StoryObj } from "@storybook/react";
import ToolsForPowershell from "../ToolsForPowershell";

const meta: Meta<typeof ToolsForPowershell> = { title: "GCP/ToolsForPowershell", component: ToolsForPowershell };

export default meta;
type Story = StoryObj<typeof ToolsForPowershell>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
