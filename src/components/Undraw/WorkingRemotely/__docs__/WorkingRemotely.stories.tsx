import type { Meta, StoryObj } from "@storybook/react";
import WorkingRemotely from "../WorkingRemotely";

const meta: Meta<typeof WorkingRemotely> = { title: "unDraw/WorkingRemotely", component: WorkingRemotely };

export default meta;
type Story = StoryObj<typeof WorkingRemotely>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
