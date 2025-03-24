import type { Meta, StoryObj } from "@storybook/react";
import WorkingLate from "../WorkingLate";

const meta: Meta<typeof WorkingLate> = { title: "unDraw/WorkingLate", component: WorkingLate };

export default meta;
type Story = StoryObj<typeof WorkingLate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
