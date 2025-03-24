import type { Meta, StoryObj } from "@storybook/react";
import Yacht from "../Yacht";

const meta: Meta<typeof Yacht> = { title: "unDraw/Yacht", component: Yacht };

export default meta;
type Story = StoryObj<typeof Yacht>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
