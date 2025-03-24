import type { Meta, StoryObj } from "@storybook/react";
import Prioritise from "../Prioritise";

const meta: Meta<typeof Prioritise> = { title: "unDraw/Prioritise", component: Prioritise };

export default meta;
type Story = StoryObj<typeof Prioritise>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
