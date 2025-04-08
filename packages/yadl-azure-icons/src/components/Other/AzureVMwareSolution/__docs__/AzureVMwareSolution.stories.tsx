import type { Meta, StoryObj } from "@storybook/react";
import AzureVMwareSolution from "../AzureVMwareSolution";

const meta: Meta<typeof AzureVMwareSolution> = { title: "Azure/Other/AzureVMwareSolution", component: AzureVMwareSolution };

export default meta;
type Story = StoryObj<typeof AzureVMwareSolution>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
