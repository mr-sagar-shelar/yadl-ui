import type { Meta, StoryObj } from "@storybook/react";
import PicProfile from "../PicProfile";

const meta: Meta<typeof PicProfile> = { title: "unDraw/PicProfile", component: PicProfile };

export default meta;
type Story = StoryObj<typeof PicProfile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
