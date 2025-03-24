import type { Meta, StoryObj } from "@storybook/react";
import Collaborating from "../Collaborating";

const meta: Meta<typeof Collaborating> = { title: "unDraw/Collaborating", component: Collaborating };

export default meta;
type Story = StoryObj<typeof Collaborating>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
