import type { Meta, StoryObj } from "@storybook/react";
import ProfileImage from "../ProfileImage";

const meta: Meta<typeof ProfileImage> = { title: "unDraw/ProfileImage", component: ProfileImage };

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
