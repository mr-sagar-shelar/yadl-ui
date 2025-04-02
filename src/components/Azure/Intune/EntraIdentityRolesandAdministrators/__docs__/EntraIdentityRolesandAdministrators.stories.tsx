import type { Meta, StoryObj } from "@storybook/react";
import EntraIdentityRolesandAdministrators from "../EntraIdentityRolesandAdministrators";

const meta: Meta<typeof EntraIdentityRolesandAdministrators> = { title: "Azure/Intune/EntraIdentityRolesandAdministrators", component: EntraIdentityRolesandAdministrators };

export default meta;
type Story = StoryObj<typeof EntraIdentityRolesandAdministrators>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
