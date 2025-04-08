import type { Meta, StoryObj } from "@storybook/react";
import EntraGlobalSecureAccess from "../EntraGlobalSecureAccess";

const meta: Meta<typeof EntraGlobalSecureAccess> = { title: "Azure/Identity/EntraGlobalSecureAccess", component: EntraGlobalSecureAccess };

export default meta;
type Story = StoryObj<typeof EntraGlobalSecureAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
