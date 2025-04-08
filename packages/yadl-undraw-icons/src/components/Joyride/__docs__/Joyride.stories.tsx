import type { Meta, StoryObj } from "@storybook/react";
import Joyride from "../Joyride";

const meta: Meta<typeof Joyride> = { title: "unDraw/Joyride", component: Joyride };

export default meta;
type Story = StoryObj<typeof Joyride>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
