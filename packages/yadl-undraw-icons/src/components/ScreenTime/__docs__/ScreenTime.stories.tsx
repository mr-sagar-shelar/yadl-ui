import type { Meta, StoryObj } from "@storybook/react";
import ScreenTime from "../ScreenTime";

const meta: Meta<typeof ScreenTime> = { title: "unDraw/ScreenTime", component: ScreenTime };

export default meta;
type Story = StoryObj<typeof ScreenTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
