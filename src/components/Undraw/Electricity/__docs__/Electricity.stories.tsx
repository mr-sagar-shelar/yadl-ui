import type { Meta, StoryObj } from "@storybook/react";
import Electricity from "../Electricity";

const meta: Meta<typeof Electricity> = { title: "unDraw/Electricity", component: Electricity };

export default meta;
type Story = StoryObj<typeof Electricity>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
