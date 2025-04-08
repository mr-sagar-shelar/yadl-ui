import type { Meta, StoryObj } from "@storybook/react";
import NetflixNetflix from "../NetflixNetflix";

const meta: Meta<typeof NetflixNetflix> = { title: "unDraw/NetflixNetflix", component: NetflixNetflix };

export default meta;
type Story = StoryObj<typeof NetflixNetflix>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
