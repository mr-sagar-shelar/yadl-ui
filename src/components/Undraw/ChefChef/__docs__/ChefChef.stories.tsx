import type { Meta, StoryObj } from "@storybook/react";
import ChefChef from "../ChefChef";

const meta: Meta<typeof ChefChef> = { title: "unDraw/ChefChef", component: ChefChef };

export default meta;
type Story = StoryObj<typeof ChefChef>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
