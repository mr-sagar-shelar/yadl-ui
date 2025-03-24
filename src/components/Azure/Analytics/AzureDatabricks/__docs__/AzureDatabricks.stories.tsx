import type { Meta, StoryObj } from "@storybook/react";
import AzureDatabricks from "../AzureDatabricks";

const meta: Meta<typeof AzureDatabricks> = { title: "Azure/Analytics/AzureDatabricks", component: AzureDatabricks };

export default meta;
type Story = StoryObj<typeof AzureDatabricks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
