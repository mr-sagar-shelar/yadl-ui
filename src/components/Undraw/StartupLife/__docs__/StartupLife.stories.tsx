import type { Meta, StoryObj } from "@storybook/react";
import StartupLife from "../StartupLife";

const meta: Meta<typeof StartupLife> = { title: "unDraw/StartupLife", component: StartupLife };

export default meta;
type Story = StoryObj<typeof StartupLife>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
