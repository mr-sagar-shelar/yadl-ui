import type { Meta, StoryObj } from "@storybook/react";
import ThingsToSay from "../ThingsToSay";

const meta: Meta<typeof ThingsToSay> = { title: "unDraw/ThingsToSay", component: ThingsToSay };

export default meta;
type Story = StoryObj<typeof ThingsToSay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
