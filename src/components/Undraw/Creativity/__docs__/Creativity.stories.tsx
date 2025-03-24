import type { Meta, StoryObj } from "@storybook/react";
import Creativity from "../Creativity";

const meta: Meta<typeof Creativity> = { title: "unDraw/Creativity", component: Creativity };

export default meta;
type Story = StoryObj<typeof Creativity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
