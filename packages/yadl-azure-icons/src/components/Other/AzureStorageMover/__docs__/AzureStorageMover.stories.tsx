import type { Meta, StoryObj } from "@storybook/react";
import AzureStorageMover from "../AzureStorageMover";

const meta: Meta<typeof AzureStorageMover> = { title: "Azure/Other/AzureStorageMover", component: AzureStorageMover };

export default meta;
type Story = StoryObj<typeof AzureStorageMover>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
