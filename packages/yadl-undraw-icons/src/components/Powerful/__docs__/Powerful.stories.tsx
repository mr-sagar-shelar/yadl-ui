import type { Meta, StoryObj } from "@storybook/react";
import Powerful from "../Powerful";

const meta: Meta<typeof Powerful> = { title: "unDraw/Powerful", component: Powerful };

export default meta;
type Story = StoryObj<typeof Powerful>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
