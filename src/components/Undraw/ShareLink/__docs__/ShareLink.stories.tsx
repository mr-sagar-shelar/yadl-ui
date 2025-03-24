import type { Meta, StoryObj } from "@storybook/react";
import ShareLink from "../ShareLink";

const meta: Meta<typeof ShareLink> = { title: "unDraw/ShareLink", component: ShareLink };

export default meta;
type Story = StoryObj<typeof ShareLink>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
