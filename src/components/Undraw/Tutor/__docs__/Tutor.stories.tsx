import type { Meta, StoryObj } from "@storybook/react";
import Tutor from "../Tutor";

const meta: Meta<typeof Tutor> = { title: "unDraw/Tutor", component: Tutor };

export default meta;
type Story = StoryObj<typeof Tutor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
