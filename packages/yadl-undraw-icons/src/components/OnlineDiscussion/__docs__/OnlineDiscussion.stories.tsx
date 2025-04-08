import type { Meta, StoryObj } from "@storybook/react";
import OnlineDiscussion from "../OnlineDiscussion";

const meta: Meta<typeof OnlineDiscussion> = { title: "unDraw/OnlineDiscussion", component: OnlineDiscussion };

export default meta;
type Story = StoryObj<typeof OnlineDiscussion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
