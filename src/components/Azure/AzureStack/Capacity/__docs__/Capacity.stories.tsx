import type { Meta, StoryObj } from "@storybook/react";
import Capacity from "../Capacity";

const meta: Meta<typeof Capacity> = { title: "Azure/AzureStack/Capacity", component: Capacity };

export default meta;
type Story = StoryObj<typeof Capacity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
