import type { Meta, StoryObj } from "@storybook/react";
import Scooter from "../Scooter";

const meta: Meta<typeof Scooter> = { title: "unDraw/Scooter", component: Scooter };

export default meta;
type Story = StoryObj<typeof Scooter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
