import type { Meta, StoryObj } from "@storybook/react";
import Delivery from "../Delivery";

const meta: Meta<typeof Delivery> = { title: "unDraw/Delivery", component: Delivery };

export default meta;
type Story = StoryObj<typeof Delivery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
