import type { Meta, StoryObj } from "@storybook/react";
import RouteTables from "../RouteTables";

const meta: Meta<typeof RouteTables> = { title: "Azure/Networking/RouteTables", component: RouteTables };

export default meta;
type Story = StoryObj<typeof RouteTables>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
