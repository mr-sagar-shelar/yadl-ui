import type { Meta, StoryObj } from "@storybook/react";
import OnlinePosts from "../OnlinePosts";

const meta: Meta<typeof OnlinePosts> = { title: "unDraw/OnlinePosts", component: OnlinePosts };

export default meta;
type Story = StoryObj<typeof OnlinePosts>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
