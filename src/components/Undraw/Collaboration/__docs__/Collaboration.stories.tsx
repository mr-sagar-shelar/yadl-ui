import type { Meta, StoryObj } from "@storybook/react";
import Collaboration from "../Collaboration";

const meta: Meta<typeof Collaboration> = { title: "unDraw/Collaboration", component: Collaboration };

export default meta;
type Story = StoryObj<typeof Collaboration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
