import type { Meta, StoryObj } from "@storybook/react";
import DefenderFreezerMonitor from "../DefenderFreezerMonitor";

const meta: Meta<typeof DefenderFreezerMonitor> = { title: "Azure/Other/DefenderFreezerMonitor", component: DefenderFreezerMonitor };

export default meta;
type Story = StoryObj<typeof DefenderFreezerMonitor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
