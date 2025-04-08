import type { Meta, StoryObj } from "@storybook/react";
import AzureSphere from "../AzureSphere";

const meta: Meta<typeof AzureSphere> = { title: "Azure/Other/AzureSphere", component: AzureSphere };

export default meta;
type Story = StoryObj<typeof AzureSphere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
