import type { Meta, StoryObj } from "@storybook/react";
import DefenderEngineeringStation from "../DefenderEngineeringStation";

const meta: Meta<typeof DefenderEngineeringStation> = { title: "Azure/Other/DefenderEngineeringStation", component: DefenderEngineeringStation };

export default meta;
type Story = StoryObj<typeof DefenderEngineeringStation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
