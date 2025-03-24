import type { Meta, StoryObj } from "@storybook/react";
import ShipIt from "../ShipIt";

const meta: Meta<typeof ShipIt> = { title: "unDraw/ShipIt", component: ShipIt };

export default meta;
type Story = StoryObj<typeof ShipIt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
