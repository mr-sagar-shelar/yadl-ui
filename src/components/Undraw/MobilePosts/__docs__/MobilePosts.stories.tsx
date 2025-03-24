import type { Meta, StoryObj } from "@storybook/react";
import MobilePosts from "../MobilePosts";

const meta: Meta<typeof MobilePosts> = { title: "unDraw/MobilePosts", component: MobilePosts };

export default meta;
type Story = StoryObj<typeof MobilePosts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
