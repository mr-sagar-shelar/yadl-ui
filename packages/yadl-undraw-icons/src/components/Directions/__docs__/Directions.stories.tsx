import type { Meta, StoryObj } from "@storybook/react";
import Directions from "../Directions";

const meta: Meta<typeof Directions> = { title: "unDraw/Directions", component: Directions };

export default meta;
type Story = StoryObj<typeof Directions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
