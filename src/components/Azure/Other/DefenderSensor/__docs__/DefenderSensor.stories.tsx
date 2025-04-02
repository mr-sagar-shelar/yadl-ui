import type { Meta, StoryObj } from "@storybook/react";
import DefenderSensor from "../DefenderSensor";

const meta: Meta<typeof DefenderSensor> = { title: "Azure/Other/DefenderSensor", component: DefenderSensor };

export default meta;
type Story = StoryObj<typeof DefenderSensor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
