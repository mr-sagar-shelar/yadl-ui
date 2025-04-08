import type { Meta, StoryObj } from "@storybook/react";
import DevProductivity from "../DevProductivity";

const meta: Meta<typeof DevProductivity> = { title: "unDraw/DevProductivity", component: DevProductivity };

export default meta;
type Story = StoryObj<typeof DevProductivity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
