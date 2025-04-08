import type { Meta, StoryObj } from "@storybook/react";
import ShortBio from "../ShortBio";

const meta: Meta<typeof ShortBio> = { title: "unDraw/ShortBio", component: ShortBio };

export default meta;
type Story = StoryObj<typeof ShortBio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
