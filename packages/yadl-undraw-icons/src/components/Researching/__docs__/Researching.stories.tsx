import type { Meta, StoryObj } from "@storybook/react";
import Researching from "../Researching";

const meta: Meta<typeof Researching> = { title: "unDraw/Researching", component: Researching };

export default meta;
type Story = StoryObj<typeof Researching>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
