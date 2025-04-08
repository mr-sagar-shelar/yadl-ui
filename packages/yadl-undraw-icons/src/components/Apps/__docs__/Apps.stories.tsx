import type { Meta, StoryObj } from "@storybook/react";
import Apps from "../Apps";

const meta: Meta<typeof Apps> = { title: "unDraw/Apps", component: Apps };

export default meta;
type Story = StoryObj<typeof Apps>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
