import type { Meta, StoryObj } from "@storybook/react";
import FashionPhotoshoot from "../FashionPhotoshoot";

const meta: Meta<typeof FashionPhotoshoot> = { title: "unDraw/FashionPhotoshoot", component: FashionPhotoshoot };

export default meta;
type Story = StoryObj<typeof FashionPhotoshoot>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
