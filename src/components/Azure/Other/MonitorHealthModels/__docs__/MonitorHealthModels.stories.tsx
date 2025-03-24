import type { Meta, StoryObj } from "@storybook/react";
import MonitorHealthModels from "../MonitorHealthModels";

const meta: Meta<typeof MonitorHealthModels> = { title: "Azure/Other/MonitorHealthModels", component: MonitorHealthModels };

export default meta;
type Story = StoryObj<typeof MonitorHealthModels>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
