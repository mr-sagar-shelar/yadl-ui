import type { Meta, StoryObj } from "@storybook/react";
import AzureA from "../AzureA";

const meta: Meta<typeof AzureA> = { title: "Azure/Other/AzureA", component: AzureA };

export default meta;
type Story = StoryObj<typeof AzureA>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
