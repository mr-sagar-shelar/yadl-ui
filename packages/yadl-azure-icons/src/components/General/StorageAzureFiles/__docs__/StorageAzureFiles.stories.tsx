import type { Meta, StoryObj } from "@storybook/react";
import StorageAzureFiles from "../StorageAzureFiles";

const meta: Meta<typeof StorageAzureFiles> = { title: "Azure/General/StorageAzureFiles", component: StorageAzureFiles };

export default meta;
type Story = StoryObj<typeof StorageAzureFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
