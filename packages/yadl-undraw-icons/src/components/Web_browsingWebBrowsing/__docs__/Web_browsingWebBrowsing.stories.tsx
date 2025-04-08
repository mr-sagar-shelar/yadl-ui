import type { Meta, StoryObj } from "@storybook/react";
import Web_browsingWebBrowsing from "../Web_browsingWebBrowsing";

const meta: Meta<typeof Web_browsingWebBrowsing> = { title: "unDraw/Web_browsingWebBrowsing", component: Web_browsingWebBrowsing };

export default meta;
type Story = StoryObj<typeof Web_browsingWebBrowsing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
