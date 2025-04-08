import type { Meta, StoryObj } from "@storybook/react";
import LinkLinkShortener from "../LinkLinkShortener";

const meta: Meta<typeof LinkLinkShortener> = { title: "unDraw/LinkLinkShortener", component: LinkLinkShortener };

export default meta;
type Story = StoryObj<typeof LinkLinkShortener>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
