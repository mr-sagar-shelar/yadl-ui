import type { Meta, StoryObj } from "@storybook/react";
import DDoSProtectionPlans from "../DDoSProtectionPlans";

const meta: Meta<typeof DDoSProtectionPlans> = { title: "Azure/Networking/DDoSProtectionPlans", component: DDoSProtectionPlans };

export default meta;
type Story = StoryObj<typeof DDoSProtectionPlans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
