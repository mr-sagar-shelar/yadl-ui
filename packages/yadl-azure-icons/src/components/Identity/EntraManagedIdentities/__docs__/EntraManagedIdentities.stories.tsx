import type { Meta, StoryObj } from "@storybook/react";
import EntraManagedIdentities from "../EntraManagedIdentities";

const meta: Meta<typeof EntraManagedIdentities> = { title: "Azure/Identity/EntraManagedIdentities", component: EntraManagedIdentities };

export default meta;
type Story = StoryObj<typeof EntraManagedIdentities>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
