import type { Meta, StoryObj } from "@storybook/react";
import SpeedTest from "../SpeedTest";

const meta: Meta<typeof SpeedTest> = { title: "unDraw/SpeedTest", component: SpeedTest };

export default meta;
type Story = StoryObj<typeof SpeedTest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
