import type { Meta, StoryObj } from "@storybook/react";
import Swing from "../Swing";

const meta: Meta<typeof Swing> = { title: "unDraw/Swing", component: Swing };

export default meta;
type Story = StoryObj<typeof Swing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
