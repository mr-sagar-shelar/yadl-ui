import type { Meta, StoryObj } from "@storybook/react";
import Brainstorming from "../Brainstorming";

const meta: Meta<typeof Brainstorming> = { title: "unDraw/Brainstorming", component: Brainstorming };

export default meta;
type Story = StoryObj<typeof Brainstorming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
