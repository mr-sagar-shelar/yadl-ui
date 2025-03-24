import type { Meta, StoryObj } from "@storybook/react";
import ControlPanel from "../ControlPanel";

const meta: Meta<typeof ControlPanel> = { title: "unDraw/ControlPanel", component: ControlPanel };

export default meta;
type Story = StoryObj<typeof ControlPanel>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
