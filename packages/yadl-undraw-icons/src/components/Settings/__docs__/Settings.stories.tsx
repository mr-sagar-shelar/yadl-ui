import type { Meta, StoryObj } from "@storybook/react";
import Settings from "../Settings";

const meta: Meta<typeof Settings> = { title: "unDraw/Settings", component: Settings };

export default meta;
type Story = StoryObj<typeof Settings>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
