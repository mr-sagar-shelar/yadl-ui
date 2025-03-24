import type { Meta, StoryObj } from "@storybook/react";
import Cat from "../Cat";

const meta: Meta<typeof Cat> = { title: "unDraw/Cat", component: Cat };

export default meta;
type Story = StoryObj<typeof Cat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
