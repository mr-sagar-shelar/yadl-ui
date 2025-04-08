import type { Meta, StoryObj } from "@storybook/react";
import AzureComputeGalleries from "../AzureComputeGalleries";

const meta: Meta<typeof AzureComputeGalleries> = { title: "Azure/Other/AzureComputeGalleries", component: AzureComputeGalleries };

export default meta;
type Story = StoryObj<typeof AzureComputeGalleries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
