import type { Meta, StoryObj } from "@storybook/react";
import Exploring from "../Exploring";

const meta: Meta<typeof Exploring> = { title: "unDraw/Exploring", component: Exploring };

export default meta;
type Story = StoryObj<typeof Exploring>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
