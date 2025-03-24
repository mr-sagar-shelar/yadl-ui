import type { Meta, StoryObj } from "@storybook/react";
import ShareOnline from "../ShareOnline";

const meta: Meta<typeof ShareOnline> = { title: "unDraw/ShareOnline", component: ShareOnline };

export default meta;
type Story = StoryObj<typeof ShareOnline>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
