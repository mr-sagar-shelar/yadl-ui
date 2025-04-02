import type { Meta, StoryObj } from "@storybook/react";
import EdgeManagement from "../EdgeManagement";

const meta: Meta<typeof EdgeManagement> = { title: "Azure/Other/EdgeManagement", component: EdgeManagement };

export default meta;
type Story = StoryObj<typeof EdgeManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
