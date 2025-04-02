import type { Meta, StoryObj } from "@storybook/react";
import EntraIdentityRiskyUsers from "../EntraIdentityRiskyUsers";

const meta: Meta<typeof EntraIdentityRiskyUsers> = { title: "Azure/Security/EntraIdentityRiskyUsers", component: EntraIdentityRiskyUsers };

export default meta;
type Story = StoryObj<typeof EntraIdentityRiskyUsers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
