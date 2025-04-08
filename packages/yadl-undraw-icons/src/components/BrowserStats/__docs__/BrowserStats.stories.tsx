import type { Meta, StoryObj } from "@storybook/react";
import BrowserStats from "../BrowserStats";

const meta: Meta<typeof BrowserStats> = { title: "unDraw/BrowserStats", component: BrowserStats };

export default meta;
type Story = StoryObj<typeof BrowserStats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
