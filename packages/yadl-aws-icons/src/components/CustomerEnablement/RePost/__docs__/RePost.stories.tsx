import type { Meta, StoryObj } from "@storybook/react";
import RePost from "../RePost";

const meta: Meta<typeof RePost> = { title: "AWS/CustomerEnablement/RePost", component: RePost };

export default meta;
type Story = StoryObj<typeof RePost>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
