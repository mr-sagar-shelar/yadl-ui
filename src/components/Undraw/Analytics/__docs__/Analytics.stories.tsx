import type { Meta, StoryObj } from "@storybook/react";
import Analytics from "../Analytics";

const meta: Meta<typeof Analytics> = { title: "unDraw/Analytics", component: Analytics };

export default meta;
type Story = StoryObj<typeof Analytics>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
