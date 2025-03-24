import type { Meta, StoryObj } from "@storybook/react";
import DefenderHMI from "../DefenderHMI";

const meta: Meta<typeof DefenderHMI> = { title: "Azure/Other/DefenderHMI", component: DefenderHMI };

export default meta;
type Story = StoryObj<typeof DefenderHMI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
