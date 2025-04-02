import type { Meta, StoryObj } from "@storybook/react";
import ComplianceCenter from "../ComplianceCenter";

const meta: Meta<typeof ComplianceCenter> = { title: "Azure/Other/ComplianceCenter", component: ComplianceCenter };

export default meta;
type Story = StoryObj<typeof ComplianceCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
