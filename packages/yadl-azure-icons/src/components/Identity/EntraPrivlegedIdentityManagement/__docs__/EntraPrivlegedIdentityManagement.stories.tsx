import type { Meta, StoryObj } from "@storybook/react";
import EntraPrivlegedIdentityManagement from "../EntraPrivlegedIdentityManagement";

const meta: Meta<typeof EntraPrivlegedIdentityManagement> = { title: "Azure/Identity/EntraPrivlegedIdentityManagement", component: EntraPrivlegedIdentityManagement };

export default meta;
type Story = StoryObj<typeof EntraPrivlegedIdentityManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
