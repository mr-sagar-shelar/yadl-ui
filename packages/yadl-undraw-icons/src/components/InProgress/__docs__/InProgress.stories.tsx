import type { Meta, StoryObj } from "@storybook/react";
import InProgress from "../InProgress";

const meta: Meta<typeof InProgress> = { title: "unDraw/InProgress", component: InProgress };

export default meta;
type Story = StoryObj<typeof InProgress>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
