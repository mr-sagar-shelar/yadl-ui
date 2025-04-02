import type { Meta, StoryObj } from "@storybook/react";
import ExpressRouteTrafficCollector from "../ExpressRouteTrafficCollector";

const meta: Meta<typeof ExpressRouteTrafficCollector> = { title: "Azure/Other/ExpressRouteTrafficCollector", component: ExpressRouteTrafficCollector };

export default meta;
type Story = StoryObj<typeof ExpressRouteTrafficCollector>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
