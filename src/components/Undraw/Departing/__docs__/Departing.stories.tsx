import type { Meta, StoryObj } from "@storybook/react";
import Departing from "../Departing";

const meta: Meta<typeof Departing> = { title: "unDraw/Departing", component: Departing };

export default meta;
type Story = StoryObj<typeof Departing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
