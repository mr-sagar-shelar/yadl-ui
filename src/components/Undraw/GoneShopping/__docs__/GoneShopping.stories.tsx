import type { Meta, StoryObj } from "@storybook/react";
import GoneShopping from "../GoneShopping";

const meta: Meta<typeof GoneShopping> = { title: "unDraw/GoneShopping", component: GoneShopping };

export default meta;
type Story = StoryObj<typeof GoneShopping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
