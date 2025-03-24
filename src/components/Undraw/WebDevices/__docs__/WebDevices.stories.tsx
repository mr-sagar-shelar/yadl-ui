import type { Meta, StoryObj } from "@storybook/react";
import WebDevices from "../WebDevices";

const meta: Meta<typeof WebDevices> = { title: "unDraw/WebDevices", component: WebDevices };

export default meta;
type Story = StoryObj<typeof WebDevices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
