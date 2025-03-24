import type { Meta, StoryObj } from "@storybook/react";
import Calling from "../Calling";

const meta: Meta<typeof Calling> = { title: "unDraw/Calling", component: Calling };

export default meta;
type Story = StoryObj<typeof Calling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
