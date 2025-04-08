import type { Meta, StoryObj } from "@storybook/react";
import MobileMarketing from "../MobileMarketing";

const meta: Meta<typeof MobileMarketing> = { title: "unDraw/MobileMarketing", component: MobileMarketing };

export default meta;
type Story = StoryObj<typeof MobileMarketing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
