import type { Meta, StoryObj } from "@storybook/react";
import CollaborativeService from "../CollaborativeService";

const meta: Meta<typeof CollaborativeService> = { title: "Azure/AzureEcosystem/CollaborativeService", component: CollaborativeService };

export default meta;
type Story = StoryObj<typeof CollaborativeService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
