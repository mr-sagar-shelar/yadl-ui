import type { Meta, StoryObj } from "@storybook/react";
import ManagedIdentities from "../ManagedIdentities";

const meta: Meta<typeof ManagedIdentities> = { title: "Azure/Identity/ManagedIdentities", component: ManagedIdentities };

export default meta;
type Story = StoryObj<typeof ManagedIdentities>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
