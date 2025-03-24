import type { Meta, StoryObj } from "@storybook/react";
import AzureStack from "../AzureStack";

const meta: Meta<typeof AzureStack> = { title: "Azure/Iot/AzureStack", component: AzureStack };

export default meta;
type Story = StoryObj<typeof AzureStack>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
