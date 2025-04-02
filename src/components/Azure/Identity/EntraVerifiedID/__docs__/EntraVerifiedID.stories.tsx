import type { Meta, StoryObj } from "@storybook/react";
import EntraVerifiedID from "../EntraVerifiedID";

const meta: Meta<typeof EntraVerifiedID> = { title: "Azure/Identity/EntraVerifiedID", component: EntraVerifiedID };

export default meta;
type Story = StoryObj<typeof EntraVerifiedID>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
