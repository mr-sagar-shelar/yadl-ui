import type { Meta, StoryObj } from "@storybook/react";
import Devices from "../Devices";

const meta: Meta<typeof Devices> = { title: "unDraw/Devices", component: Devices };

export default meta;
type Story = StoryObj<typeof Devices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
