import type { Meta, StoryObj } from "@storybook/react";
import EntraIdentityRiskySignins from "../EntraIdentityRiskySignins";

const meta: Meta<typeof EntraIdentityRiskySignins> = { title: "Azure/Security/EntraIdentityRiskySignins", component: EntraIdentityRiskySignins };

export default meta;
type Story = StoryObj<typeof EntraIdentityRiskySignins>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
