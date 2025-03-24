import type { Meta, StoryObj } from "@storybook/react";
import VMAppVersions from "../VMAppVersions";

const meta: Meta<typeof VMAppVersions> = { title: "Azure/Other/VMAppVersions", component: VMAppVersions };

export default meta;
type Story = StoryObj<typeof VMAppVersions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
