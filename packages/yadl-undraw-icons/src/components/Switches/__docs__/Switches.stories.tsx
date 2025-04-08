import type { Meta, StoryObj } from "@storybook/react";
import Switches from "../Switches";

const meta: Meta<typeof Switches> = { title: "unDraw/Switches", component: Switches };

export default meta;
type Story = StoryObj<typeof Switches>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
