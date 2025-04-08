import type { Meta, StoryObj } from "@storybook/react";
import DefenderMeter from "../DefenderMeter";

const meta: Meta<typeof DefenderMeter> = { title: "Azure/Other/DefenderMeter", component: DefenderMeter };

export default meta;
type Story = StoryObj<typeof DefenderMeter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
