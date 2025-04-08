import type { Meta, StoryObj } from "@storybook/react";
import FillIn from "../FillIn";

const meta: Meta<typeof FillIn> = { title: "unDraw/FillIn", component: FillIn };

export default meta;
type Story = StoryObj<typeof FillIn>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
