import type { Meta, StoryObj } from "@storybook/react";
import Revenue from "../Revenue";

const meta: Meta<typeof Revenue> = { title: "unDraw/Revenue", component: Revenue };

export default meta;
type Story = StoryObj<typeof Revenue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
