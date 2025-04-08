import type { Meta, StoryObj } from "@storybook/react";
import AppComplianceAutomation from "../AppComplianceAutomation";

const meta: Meta<typeof AppComplianceAutomation> = { title: "Azure/Other/AppComplianceAutomation", component: AppComplianceAutomation };

export default meta;
type Story = StoryObj<typeof AppComplianceAutomation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
