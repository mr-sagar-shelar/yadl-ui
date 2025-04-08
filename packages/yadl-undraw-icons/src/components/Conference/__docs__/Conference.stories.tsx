import type { Meta, StoryObj } from "@storybook/react";
import Conference from "../Conference";

const meta: Meta<typeof Conference> = { title: "unDraw/Conference", component: Conference };

export default meta;
type Story = StoryObj<typeof Conference>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
