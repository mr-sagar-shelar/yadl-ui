import type { Meta, StoryObj } from "@storybook/react";
import Meditation from "../Meditation";

const meta: Meta<typeof Meditation> = { title: "unDraw/Meditation", component: Meditation };

export default meta;
type Story = StoryObj<typeof Meditation>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
