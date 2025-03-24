import type { Meta, StoryObj } from "@storybook/react";
import MissedChancesMissedChances from "../MissedChancesMissedChances";

const meta: Meta<typeof MissedChancesMissedChances> = { title: "unDraw/MissedChancesMissedChances", component: MissedChancesMissedChances };

export default meta;
type Story = StoryObj<typeof MissedChancesMissedChances>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
