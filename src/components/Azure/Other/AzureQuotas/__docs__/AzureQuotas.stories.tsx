import type { Meta, StoryObj } from "@storybook/react";
import AzureQuotas from "../AzureQuotas";

const meta: Meta<typeof AzureQuotas> = { title: "Azure/Other/AzureQuotas", component: AzureQuotas };

export default meta;
type Story = StoryObj<typeof AzureQuotas>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
