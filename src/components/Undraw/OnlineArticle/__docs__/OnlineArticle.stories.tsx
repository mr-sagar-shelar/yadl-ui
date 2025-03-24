import type { Meta, StoryObj } from "@storybook/react";
import OnlineArticle from "../OnlineArticle";

const meta: Meta<typeof OnlineArticle> = { title: "unDraw/OnlineArticle", component: OnlineArticle };

export default meta;
type Story = StoryObj<typeof OnlineArticle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
