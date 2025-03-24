import type { Meta, StoryObj } from "@storybook/react";
import WatchApplication from "../WatchApplication";

const meta: Meta<typeof WatchApplication> = { title: "unDraw/WatchApplication", component: WatchApplication };

export default meta;
type Story = StoryObj<typeof WatchApplication>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
