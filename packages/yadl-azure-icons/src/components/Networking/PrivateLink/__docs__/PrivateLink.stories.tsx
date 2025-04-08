import type { Meta, StoryObj } from "@storybook/react";
import PrivateLink from "../PrivateLink";

const meta: Meta<typeof PrivateLink> = { title: "Azure/Networking/PrivateLink", component: PrivateLink };

export default meta;
type Story = StoryObj<typeof PrivateLink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
