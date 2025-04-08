import type { Meta, StoryObj } from "@storybook/react";
import AzureFileshares from "../AzureFileshares";

const meta: Meta<typeof AzureFileshares> = { title: "Azure/Storage/AzureFileshares", component: AzureFileshares };

export default meta;
type Story = StoryObj<typeof AzureFileshares>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
