import type { Meta, StoryObj } from "@storybook/react";
import MultiTenancy from "../MultiTenancy";

const meta: Meta<typeof MultiTenancy> = { title: "Azure/AzureStack/MultiTenancy", component: MultiTenancy };

export default meta;
type Story = StoryObj<typeof MultiTenancy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
