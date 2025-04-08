import type { Meta, StoryObj } from "@storybook/react";
import Ether from "../Ether";

const meta: Meta<typeof Ether> = { title: "unDraw/Ether", component: Ether };

export default meta;
type Story = StoryObj<typeof Ether>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
