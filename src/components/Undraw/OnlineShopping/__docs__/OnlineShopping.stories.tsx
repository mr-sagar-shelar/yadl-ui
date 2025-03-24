import type { Meta, StoryObj } from "@storybook/react";
import OnlineShopping from "../OnlineShopping";

const meta: Meta<typeof OnlineShopping> = { title: "unDraw/OnlineShopping", component: OnlineShopping };

export default meta;
type Story = StoryObj<typeof OnlineShopping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
