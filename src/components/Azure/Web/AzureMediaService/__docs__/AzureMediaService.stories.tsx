import type { Meta, StoryObj } from "@storybook/react";
import AzureMediaService from "../AzureMediaService";

const meta: Meta<typeof AzureMediaService> = { title: "Azure/Web/AzureMediaService", component: AzureMediaService };

export default meta;
type Story = StoryObj<typeof AzureMediaService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
