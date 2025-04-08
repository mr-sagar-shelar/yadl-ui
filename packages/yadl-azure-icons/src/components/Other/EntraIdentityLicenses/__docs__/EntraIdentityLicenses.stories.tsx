import type { Meta, StoryObj } from "@storybook/react";
import EntraIdentityLicenses from "../EntraIdentityLicenses";

const meta: Meta<typeof EntraIdentityLicenses> = { title: "Azure/Other/EntraIdentityLicenses", component: EntraIdentityLicenses };

export default meta;
type Story = StoryObj<typeof EntraIdentityLicenses>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
