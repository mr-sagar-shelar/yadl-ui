import type { Meta, StoryObj } from "@storybook/react";
import PublishArticle from "../PublishArticle";

const meta: Meta<typeof PublishArticle> = { title: "unDraw/PublishArticle", component: PublishArticle };

export default meta;
type Story = StoryObj<typeof PublishArticle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
