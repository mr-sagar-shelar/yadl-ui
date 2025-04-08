import type { Meta, StoryObj } from "@storybook/react";
import VMImageVersion from "../VMImageVersion";

const meta: Meta<typeof VMImageVersion> = { title: "Azure/Other/VMImageVersion", component: VMImageVersion };

export default meta;
type Story = StoryObj<typeof VMImageVersion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
