import type { Meta, StoryObj } from "@storybook/react";
import Online from "../Online";

const meta: Meta<typeof Online> = { title: "unDraw/Online", component: Online };

export default meta;
type Story = StoryObj<typeof Online>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
