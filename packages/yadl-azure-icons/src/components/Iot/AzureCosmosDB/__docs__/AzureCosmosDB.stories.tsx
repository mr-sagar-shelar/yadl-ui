import type { Meta, StoryObj } from "@storybook/react";
import AzureCosmosDB from "../AzureCosmosDB";

const meta: Meta<typeof AzureCosmosDB> = { title: "Azure/Iot/AzureCosmosDB", component: AzureCosmosDB };

export default meta;
type Story = StoryObj<typeof AzureCosmosDB>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
