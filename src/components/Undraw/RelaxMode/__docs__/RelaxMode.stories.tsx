import type { Meta, StoryObj } from "@storybook/react";
import RelaxMode from "../RelaxMode";

const meta: Meta<typeof RelaxMode> = { title: "unDraw/RelaxMode", component: RelaxMode };

export default meta;
type Story = StoryObj<typeof RelaxMode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
