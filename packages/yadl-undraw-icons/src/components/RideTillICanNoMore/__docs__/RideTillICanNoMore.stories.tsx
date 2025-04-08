import type { Meta, StoryObj } from "@storybook/react";
import RideTillICanNoMore from "../RideTillICanNoMore";

const meta: Meta<typeof RideTillICanNoMore> = { title: "unDraw/RideTillICanNoMore", component: RideTillICanNoMore };

export default meta;
type Story = StoryObj<typeof RideTillICanNoMore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
