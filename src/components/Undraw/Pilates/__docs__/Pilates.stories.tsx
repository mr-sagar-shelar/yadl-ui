import type { Meta, StoryObj } from "@storybook/react";
import Pilates from "../Pilates";

const meta: Meta<typeof Pilates> = { title: "unDraw/Pilates", component: Pilates };

export default meta;
type Story = StoryObj<typeof Pilates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
