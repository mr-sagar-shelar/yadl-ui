import type { Meta, StoryObj } from "@storybook/react";
import Opened from "../Opened";

const meta: Meta<typeof Opened> = { title: "unDraw/Opened", component: Opened };

export default meta;
type Story = StoryObj<typeof Opened>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
