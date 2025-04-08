import type { Meta, StoryObj } from "@storybook/react";
import AzureNetAppFiles from "../AzureNetAppFiles";

const meta: Meta<typeof AzureNetAppFiles> = { title: "Azure/Storage/AzureNetAppFiles", component: AzureNetAppFiles };

export default meta;
type Story = StoryObj<typeof AzureNetAppFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
