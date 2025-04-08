import type { Meta, StoryObj } from "@storybook/react";
import AzureDataCatalog from "../AzureDataCatalog";

const meta: Meta<typeof AzureDataCatalog> = { title: "Azure/Integration/AzureDataCatalog", component: AzureDataCatalog };

export default meta;
type Story = StoryObj<typeof AzureDataCatalog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
