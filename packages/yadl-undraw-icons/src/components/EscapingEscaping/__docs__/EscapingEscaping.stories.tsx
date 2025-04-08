import type { Meta, StoryObj } from "@storybook/react";
import EscapingEscaping from "../EscapingEscaping";

const meta: Meta<typeof EscapingEscaping> = { title: "unDraw/EscapingEscaping", component: EscapingEscaping };

export default meta;
type Story = StoryObj<typeof EscapingEscaping>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
