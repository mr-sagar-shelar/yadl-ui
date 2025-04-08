import type { Meta, StoryObj } from "@storybook/react";
import Farming from "../Farming";

const meta: Meta<typeof Farming> = { title: "unDraw/Farming", component: Farming };

export default meta;
type Story = StoryObj<typeof Farming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
