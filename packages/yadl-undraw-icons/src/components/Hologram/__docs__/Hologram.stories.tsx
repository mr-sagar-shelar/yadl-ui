import type { Meta, StoryObj } from "@storybook/react";
import Hologram from "../Hologram";

const meta: Meta<typeof Hologram> = { title: "unDraw/Hologram", component: Hologram };

export default meta;
type Story = StoryObj<typeof Hologram>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
