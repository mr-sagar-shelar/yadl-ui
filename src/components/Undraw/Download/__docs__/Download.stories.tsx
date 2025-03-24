import type { Meta, StoryObj } from "@storybook/react";
import Download from "../Download";

const meta: Meta<typeof Download> = { title: "unDraw/Download", component: Download };

export default meta;
type Story = StoryObj<typeof Download>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
