import type { Meta, StoryObj } from "@storybook/react";
import Articles from "../Articles";

const meta: Meta<typeof Articles> = { title: "unDraw/Articles", component: Articles };

export default meta;
type Story = StoryObj<typeof Articles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
