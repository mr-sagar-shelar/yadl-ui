import type { Meta, StoryObj } from "@storybook/react";
import PageNotFound from "../PageNotFound";

const meta: Meta<typeof PageNotFound> = { title: "unDraw/PageNotFound", component: PageNotFound };

export default meta;
type Story = StoryObj<typeof PageNotFound>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
