import type { Meta, StoryObj } from "@storybook/react";
import Firmware from "../Firmware";

const meta: Meta<typeof Firmware> = { title: "unDraw/Firmware", component: Firmware };

export default meta;
type Story = StoryObj<typeof Firmware>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
