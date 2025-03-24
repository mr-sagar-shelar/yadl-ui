import type { Meta, StoryObj } from "@storybook/react";
import RelaunchDay from "../RelaunchDay";

const meta: Meta<typeof RelaunchDay> = { title: "unDraw/RelaunchDay", component: RelaunchDay };

export default meta;
type Story = StoryObj<typeof RelaunchDay>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
