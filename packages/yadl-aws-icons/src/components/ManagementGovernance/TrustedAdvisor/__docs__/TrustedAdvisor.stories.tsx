import type { Meta, StoryObj } from "@storybook/react";
import TrustedAdvisor from "../TrustedAdvisor";

const meta: Meta<typeof TrustedAdvisor> = { title: "AWS/ManagementGovernance/TrustedAdvisor", component: TrustedAdvisor };

export default meta;
type Story = StoryObj<typeof TrustedAdvisor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
