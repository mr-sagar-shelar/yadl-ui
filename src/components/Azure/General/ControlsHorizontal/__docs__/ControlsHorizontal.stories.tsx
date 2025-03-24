import type { Meta, StoryObj } from "@storybook/react";
import ControlsHorizontal from "../ControlsHorizontal";

const meta: Meta<typeof ControlsHorizontal> = { title: "Azure/General/ControlsHorizontal", component: ControlsHorizontal };

export default meta;
type Story = StoryObj<typeof ControlsHorizontal>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
