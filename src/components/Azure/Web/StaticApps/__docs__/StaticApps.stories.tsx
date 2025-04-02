import type { Meta, StoryObj } from "@storybook/react";
import StaticApps from "../StaticApps";

const meta: Meta<typeof StaticApps> = { title: "Azure/Web/StaticApps", component: StaticApps };

export default meta;
type Story = StoryObj<typeof StaticApps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
