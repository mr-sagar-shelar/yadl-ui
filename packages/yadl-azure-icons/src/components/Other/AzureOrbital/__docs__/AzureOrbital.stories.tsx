import type { Meta, StoryObj } from "@storybook/react";
import AzureOrbital from "../AzureOrbital";

const meta: Meta<typeof AzureOrbital> = { title: "Azure/Other/AzureOrbital", component: AzureOrbital };

export default meta;
type Story = StoryObj<typeof AzureOrbital>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
