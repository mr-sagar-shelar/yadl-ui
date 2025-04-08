import type { Meta, StoryObj } from "@storybook/react";
import Ice_creamIceCream from "../Ice_creamIceCream";

const meta: Meta<typeof Ice_creamIceCream> = { title: "unDraw/Ice_creamIceCream", component: Ice_creamIceCream };

export default meta;
type Story = StoryObj<typeof Ice_creamIceCream>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
