import type { Meta, StoryObj } from "@storybook/react";
import AzureVideoIndexer from "../AzureVideoIndexer";

const meta: Meta<typeof AzureVideoIndexer> = { title: "Azure/Other/AzureVideoIndexer", component: AzureVideoIndexer };

export default meta;
type Story = StoryObj<typeof AzureVideoIndexer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
