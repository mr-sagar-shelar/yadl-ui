import type { Meta, StoryObj } from "@storybook/react";
import CostManagement from "../CostManagement";

const meta: Meta<typeof CostManagement> = { title: "Azure/General/CostManagement", component: CostManagement };

export default meta;
type Story = StoryObj<typeof CostManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
