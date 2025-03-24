import type { Meta, StoryObj } from "@storybook/react";
import ProgressData from "../ProgressData";

const meta: Meta<typeof ProgressData> = { title: "unDraw/ProgressData", component: ProgressData };

export default meta;
type Story = StoryObj<typeof ProgressData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
