import type { Meta, StoryObj } from "@storybook/react";
import DiskPool from "../DiskPool";

const meta: Meta<typeof DiskPool> = { title: "Azure/Other/DiskPool", component: DiskPool };

export default meta;
type Story = StoryObj<typeof DiskPool>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
