import type { Meta, StoryObj } from "@storybook/react";
import CareerProcesscareerProgress from "../CareerProcesscareerProgress";

const meta: Meta<typeof CareerProcesscareerProgress> = { title: "unDraw/CareerProcesscareerProgress", component: CareerProcesscareerProgress };

export default meta;
type Story = StoryObj<typeof CareerProcesscareerProgress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
