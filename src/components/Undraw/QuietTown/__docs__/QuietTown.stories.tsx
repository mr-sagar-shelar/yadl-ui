import type { Meta, StoryObj } from "@storybook/react";
import QuietTown from "../QuietTown";

const meta: Meta<typeof QuietTown> = { title: "unDraw/QuietTown", component: QuietTown };

export default meta;
type Story = StoryObj<typeof QuietTown>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
