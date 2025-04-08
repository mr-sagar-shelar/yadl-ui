import type { Meta, StoryObj } from "@storybook/react";
import Pitching from "../Pitching";

const meta: Meta<typeof Pitching> = { title: "unDraw/Pitching", component: Pitching };

export default meta;
type Story = StoryObj<typeof Pitching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
