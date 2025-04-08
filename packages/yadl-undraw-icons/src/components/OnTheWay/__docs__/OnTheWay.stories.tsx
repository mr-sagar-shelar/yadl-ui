import type { Meta, StoryObj } from "@storybook/react";
import OnTheWay from "../OnTheWay";

const meta: Meta<typeof OnTheWay> = { title: "unDraw/OnTheWay", component: OnTheWay };

export default meta;
type Story = StoryObj<typeof OnTheWay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
