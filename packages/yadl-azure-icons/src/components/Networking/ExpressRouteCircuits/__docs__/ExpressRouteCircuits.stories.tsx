import type { Meta, StoryObj } from "@storybook/react";
import ExpressRouteCircuits from "../ExpressRouteCircuits";

const meta: Meta<typeof ExpressRouteCircuits> = { title: "Azure/Networking/ExpressRouteCircuits", component: ExpressRouteCircuits };

export default meta;
type Story = StoryObj<typeof ExpressRouteCircuits>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
