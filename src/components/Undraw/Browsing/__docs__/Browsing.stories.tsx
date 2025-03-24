import type { Meta, StoryObj } from "@storybook/react";
import Browsing from "../Browsing";

const meta: Meta<typeof Browsing> = { title: "unDraw/Browsing", component: Browsing };

export default meta;
type Story = StoryObj<typeof Browsing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
