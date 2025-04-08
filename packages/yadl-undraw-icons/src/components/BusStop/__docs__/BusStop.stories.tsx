import type { Meta, StoryObj } from "@storybook/react";
import BusStop from "../BusStop";

const meta: Meta<typeof BusStop> = { title: "unDraw/BusStop", component: BusStop };

export default meta;
type Story = StoryObj<typeof BusStop>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
