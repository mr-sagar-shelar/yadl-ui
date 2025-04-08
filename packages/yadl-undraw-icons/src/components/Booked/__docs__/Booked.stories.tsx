import type { Meta, StoryObj } from "@storybook/react";
import Booked from "../Booked";

const meta: Meta<typeof Booked> = { title: "unDraw/Booked", component: Booked };

export default meta;
type Story = StoryObj<typeof Booked>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
