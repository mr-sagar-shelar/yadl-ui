import type { Meta, StoryObj } from "@storybook/react";
import Couple from "../Couple";

const meta: Meta<typeof Couple> = { title: "unDraw/Couple", component: Couple };

export default meta;
type Story = StoryObj<typeof Couple>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
