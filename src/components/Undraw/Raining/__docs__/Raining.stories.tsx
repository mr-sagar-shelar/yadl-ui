import type { Meta, StoryObj } from "@storybook/react";
import Raining from "../Raining";

const meta: Meta<typeof Raining> = { title: "unDraw/Raining", component: Raining };

export default meta;
type Story = StoryObj<typeof Raining>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
