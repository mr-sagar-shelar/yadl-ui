import type { Meta, StoryObj } from "@storybook/react";
import AzureSupportCenterBlue from "../AzureSupportCenterBlue";

const meta: Meta<typeof AzureSupportCenterBlue> = { title: "Azure/Other/AzureSupportCenterBlue", component: AzureSupportCenterBlue };

export default meta;
type Story = StoryObj<typeof AzureSupportCenterBlue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
