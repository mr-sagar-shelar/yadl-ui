import type { Meta, StoryObj } from "@storybook/react";
import Icons from "../Icons";

const meta: Meta<typeof Icons> = { title: "unDraw/Icons", component: Icons };

export default meta;
type Story = StoryObj<typeof Icons>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
