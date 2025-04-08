import type { Meta, StoryObj } from "@storybook/react";
import Innovative from "../Innovative";

const meta: Meta<typeof Innovative> = { title: "unDraw/Innovative", component: Innovative };

export default meta;
type Story = StoryObj<typeof Innovative>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
