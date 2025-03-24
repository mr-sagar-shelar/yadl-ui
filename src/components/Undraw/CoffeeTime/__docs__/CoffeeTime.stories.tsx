import type { Meta, StoryObj } from "@storybook/react";
import CoffeeTime from "../CoffeeTime";

const meta: Meta<typeof CoffeeTime> = { title: "unDraw/CoffeeTime", component: CoffeeTime };

export default meta;
type Story = StoryObj<typeof CoffeeTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
