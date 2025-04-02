import type { Meta, StoryObj } from "@storybook/react";
import EntraPrivateAccess from "../EntraPrivateAccess";

const meta: Meta<typeof EntraPrivateAccess> = { title: "Azure/Identity/EntraPrivateAccess", component: EntraPrivateAccess };

export default meta;
type Story = StoryObj<typeof EntraPrivateAccess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
