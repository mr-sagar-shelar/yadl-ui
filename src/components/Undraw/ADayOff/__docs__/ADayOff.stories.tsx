import type { Meta, StoryObj } from "@storybook/react";
import ADayOff from "../ADayOff";

const meta: Meta<typeof ADayOff> = { title: "unDraw/ADayOff", component: ADayOff };

export default meta;
type Story = StoryObj<typeof ADayOff>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
