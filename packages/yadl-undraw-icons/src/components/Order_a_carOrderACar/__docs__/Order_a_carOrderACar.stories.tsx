import type { Meta, StoryObj } from "@storybook/react";
import Order_a_carOrderACar from "../Order_a_carOrderACar";

const meta: Meta<typeof Order_a_carOrderACar> = { title: "unDraw/Order_a_carOrderACar", component: Order_a_carOrderACar };

export default meta;
type Story = StoryObj<typeof Order_a_carOrderACar>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
