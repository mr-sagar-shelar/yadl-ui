import type { Meta, StoryObj } from "@storybook/react";
import Decide from "../Decide";

const meta: Meta<typeof Decide> = { title: "unDraw/Decide", component: Decide };

export default meta;
type Story = StoryObj<typeof Decide>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
