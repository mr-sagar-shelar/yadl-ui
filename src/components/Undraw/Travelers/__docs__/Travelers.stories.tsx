import type { Meta, StoryObj } from "@storybook/react";
import Travelers from "../Travelers";

const meta: Meta<typeof Travelers> = { title: "unDraw/Travelers", component: Travelers };

export default meta;
type Story = StoryObj<typeof Travelers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
