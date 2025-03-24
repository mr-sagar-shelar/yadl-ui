import type { Meta, StoryObj } from "@storybook/react";
import BrowsingOnline from "../BrowsingOnline";

const meta: Meta<typeof BrowsingOnline> = { title: "unDraw/BrowsingOnline", component: BrowsingOnline };

export default meta;
type Story = StoryObj<typeof BrowsingOnline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
