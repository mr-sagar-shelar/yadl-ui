import type { Meta, StoryObj } from "@storybook/react";
import Teamwork from "../Teamwork";

const meta: Meta<typeof Teamwork> = { title: "unDraw/Teamwork", component: Teamwork };

export default meta;
type Story = StoryObj<typeof Teamwork>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
