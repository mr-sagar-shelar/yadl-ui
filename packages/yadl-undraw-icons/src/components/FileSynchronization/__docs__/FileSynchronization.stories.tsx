import type { Meta, StoryObj } from "@storybook/react";
import FileSynchronization from "../FileSynchronization";

const meta: Meta<typeof FileSynchronization> = { title: "unDraw/FileSynchronization", component: FileSynchronization };

export default meta;
type Story = StoryObj<typeof FileSynchronization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
