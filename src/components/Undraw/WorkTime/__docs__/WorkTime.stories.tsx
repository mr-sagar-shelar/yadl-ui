import type { Meta, StoryObj } from "@storybook/react";
import WorkTime from "../WorkTime";

const meta: Meta<typeof WorkTime> = { title: "unDraw/WorkTime", component: WorkTime };

export default meta;
type Story = StoryObj<typeof WorkTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
