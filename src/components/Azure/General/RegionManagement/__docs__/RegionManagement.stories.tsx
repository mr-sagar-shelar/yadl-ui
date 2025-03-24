import type { Meta, StoryObj } from "@storybook/react";
import RegionManagement from "../RegionManagement";

const meta: Meta<typeof RegionManagement> = { title: "Azure/General/RegionManagement", component: RegionManagement };

export default meta;
type Story = StoryObj<typeof RegionManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
