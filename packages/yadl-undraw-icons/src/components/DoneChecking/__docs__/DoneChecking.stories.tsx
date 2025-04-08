import type { Meta, StoryObj } from "@storybook/react";
import DoneChecking from "../DoneChecking";

const meta: Meta<typeof DoneChecking> = { title: "unDraw/DoneChecking", component: DoneChecking };

export default meta;
type Story = StoryObj<typeof DoneChecking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
