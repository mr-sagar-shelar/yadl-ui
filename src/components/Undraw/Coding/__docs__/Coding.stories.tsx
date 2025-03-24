import type { Meta, StoryObj } from "@storybook/react";
import Coding from "../Coding";

const meta: Meta<typeof Coding> = { title: "unDraw/Coding", component: Coding };

export default meta;
type Story = StoryObj<typeof Coding>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
