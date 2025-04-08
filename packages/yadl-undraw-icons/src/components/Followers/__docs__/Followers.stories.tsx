import type { Meta, StoryObj } from "@storybook/react";
import Followers from "../Followers";

const meta: Meta<typeof Followers> = { title: "unDraw/Followers", component: Followers };

export default meta;
type Story = StoryObj<typeof Followers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
