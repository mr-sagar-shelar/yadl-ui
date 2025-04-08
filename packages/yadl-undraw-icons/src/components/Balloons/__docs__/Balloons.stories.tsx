import type { Meta, StoryObj } from "@storybook/react";
import Balloons from "../Balloons";

const meta: Meta<typeof Balloons> = { title: "unDraw/Balloons", component: Balloons };

export default meta;
type Story = StoryObj<typeof Balloons>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
