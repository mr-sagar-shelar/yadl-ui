import type { Meta, StoryObj } from "@storybook/react";
import EntraIdentityCustomRoles from "../EntraIdentityCustomRoles";

const meta: Meta<typeof EntraIdentityCustomRoles> = { title: "Azure/Identity/EntraIdentityCustomRoles", component: EntraIdentityCustomRoles };

export default meta;
type Story = StoryObj<typeof EntraIdentityCustomRoles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
