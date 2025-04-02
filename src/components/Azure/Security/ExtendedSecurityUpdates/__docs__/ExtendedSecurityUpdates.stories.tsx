import type { Meta, StoryObj } from "@storybook/react";
import ExtendedSecurityUpdates from "../ExtendedSecurityUpdates";

const meta: Meta<typeof ExtendedSecurityUpdates> = { title: "Azure/Security/ExtendedSecurityUpdates", component: ExtendedSecurityUpdates };

export default meta;
type Story = StoryObj<typeof ExtendedSecurityUpdates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
