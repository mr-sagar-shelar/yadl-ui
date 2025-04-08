import type { Meta, StoryObj } from "@storybook/react";
import OnlineArticles from "../OnlineArticles";

const meta: Meta<typeof OnlineArticles> = { title: "unDraw/OnlineArticles", component: OnlineArticles };

export default meta;
type Story = StoryObj<typeof OnlineArticles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
