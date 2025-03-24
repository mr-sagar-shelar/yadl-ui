import type { Meta, StoryObj } from "@storybook/react";
import Expecting from "../Expecting";

const meta: Meta<typeof Expecting> = { title: "unDraw/Expecting", component: Expecting };

export default meta;
type Story = StoryObj<typeof Expecting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
