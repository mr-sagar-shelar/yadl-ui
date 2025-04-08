import type { Meta, StoryObj } from "@storybook/react";
import WatchApp from "../WatchApp";

const meta: Meta<typeof WatchApp> = { title: "unDraw/WatchApp", component: WatchApp };

export default meta;
type Story = StoryObj<typeof WatchApp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
