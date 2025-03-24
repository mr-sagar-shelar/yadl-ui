import type { Meta, StoryObj } from "@storybook/react";
import PublicDiscussion from "../PublicDiscussion";

const meta: Meta<typeof PublicDiscussion> = { title: "unDraw/PublicDiscussion", component: PublicDiscussion };

export default meta;
type Story = StoryObj<typeof PublicDiscussion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
