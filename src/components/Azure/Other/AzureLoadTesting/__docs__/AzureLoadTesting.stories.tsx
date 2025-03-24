import type { Meta, StoryObj } from "@storybook/react";
import AzureLoadTesting from "../AzureLoadTesting";

const meta: Meta<typeof AzureLoadTesting> = { title: "Azure/Other/AzureLoadTesting", component: AzureLoadTesting };

export default meta;
type Story = StoryObj<typeof AzureLoadTesting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
