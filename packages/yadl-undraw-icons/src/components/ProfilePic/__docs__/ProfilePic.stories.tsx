import type { Meta, StoryObj } from "@storybook/react";
import ProfilePic from "../ProfilePic";

const meta: Meta<typeof ProfilePic> = { title: "unDraw/ProfilePic", component: ProfilePic };

export default meta;
type Story = StoryObj<typeof ProfilePic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
