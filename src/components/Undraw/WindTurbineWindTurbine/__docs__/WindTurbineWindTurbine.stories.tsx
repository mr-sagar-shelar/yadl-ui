import type { Meta, StoryObj } from "@storybook/react";
import WindTurbineWindTurbine from "../WindTurbineWindTurbine";

const meta: Meta<typeof WindTurbineWindTurbine> = { title: "unDraw/WindTurbineWindTurbine", component: WindTurbineWindTurbine };

export default meta;
type Story = StoryObj<typeof WindTurbineWindTurbine>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
