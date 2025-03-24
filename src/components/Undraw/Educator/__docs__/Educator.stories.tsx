import type { Meta, StoryObj } from "@storybook/react";
import Educator from "../Educator";

const meta: Meta<typeof Educator> = { title: "unDraw/Educator", component: Educator };

export default meta;
type Story = StoryObj<typeof Educator>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
