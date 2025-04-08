import type { Meta, StoryObj } from "@storybook/react";
import RefreshingRefreshing from "../RefreshingRefreshing";

const meta: Meta<typeof RefreshingRefreshing> = { title: "unDraw/RefreshingRefreshing", component: RefreshingRefreshing };

export default meta;
type Story = StoryObj<typeof RefreshingRefreshing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
